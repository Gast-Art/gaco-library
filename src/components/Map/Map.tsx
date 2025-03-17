import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface MapProps {
  apiKey: string;
  markersAddresses?: string[];
  center?: maptilersdk.LngLatLike;
  zoom?: number;
}

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Map = ({ apiKey, markersAddresses, center, zoom }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);

  maptilersdk.config.apiKey = apiKey;

  const geocodeAddress = async (address: string): Promise<maptilersdk.LngLatLike> => {
    const response = await fetch(`https://api.maptiler.com/geocoding/${address}.json?key=${apiKey}`);
    const data = await response.json();
    return data.features[0].geometry.coordinates;
  };

  useEffect(() => {
    if (map.current) return;

    if (mapContainer.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.BACKDROP,
        center: center || { lng: 0, lat: 0 },
        zoom: zoom || 14,
      });
    }
  }, [center, zoom]);

  useEffect(() => {
    if (!map.current || !markersAddresses) return;

    (async () => {
      const markerLngLats = await Promise.all(markersAddresses.map((address) => geocodeAddress(address)));

      const bounds = new maptilersdk.LngLatBounds();
      markerLngLats.forEach((marker) => bounds.extend(marker));

      map.current!.fitBounds(bounds, { padding: 20, zoom: zoom });

      markerLngLats.forEach((markerLngLat) => {
        const marker = new maptilersdk.Marker().setLngLat(markerLngLat).addTo(map.current!);
      });
    })();
  }, [markersAddresses]);

  return <MapContainer ref={mapContainer} />;
};
