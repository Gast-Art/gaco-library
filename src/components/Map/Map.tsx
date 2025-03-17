import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { useEffect, useRef, useState } from 'react';
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
  const [markerLngLats, setMarkerLngLats] = useState<maptilersdk.LngLatLike[] | null>(null);

  maptilersdk.config.apiKey = apiKey;

  const geocodeAddress = async (address: string): Promise<maptilersdk.LngLatLike> => {
    const response = await fetch(`https://api.maptiler.com/geocoding/${address}.json?key=${apiKey}`);
    const data = await response.json();
    return data.features[0].geometry.coordinates;
  };

  useEffect(() => {
    const initializeMap = async () => {
      if (map.current || !mapContainer.current) return;

      let calculatedCenter = center;

      if (!center && markersAddresses) {
        const lngLats = await Promise.all(markersAddresses.map((address) => geocodeAddress(address)));
        const bounds = new maptilersdk.LngLatBounds();
        setMarkerLngLats(lngLats);
        lngLats.forEach((marker) => bounds.extend(marker));
        calculatedCenter = bounds.getCenter();
      }

      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.BACKDROP,
        center: calculatedCenter || { lng: 0, lat: 0 },
        zoom: zoom || 14,
      });
    };

    initializeMap();
  }, [center, markerLngLats, zoom]);

  useEffect(() => {
    if (!map.current || !markerLngLats) return;

    markerLngLats.forEach((markerLngLat) => {
      new maptilersdk.Marker().setLngLat(markerLngLat).addTo(map.current!);
    });
  }, [markerLngLats, zoom]);

  return <MapContainer ref={mapContainer} />;
};
