import * as maptilersdk from '@maptiler/sdk';
interface MapProps {
    apiKey: string;
    markersAddresses?: string[];
    center?: maptilersdk.LngLatLike;
    zoom?: number;
}
export declare const Map: ({ apiKey, markersAddresses, center, zoom }: MapProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Map.d.ts.map