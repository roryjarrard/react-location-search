import type { Place } from './Place';

interface  SearchResponse {
    features: {
        geometry: {
            coordinates: number[];
        },

        properties: {
            display_name: string;
            place_id: string;
        }
    }[];
};

export const search = async (term: string) => {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=geojson&q=${term}&addressdetails=1&layer=address&limit=5`,
    );

    const data: SearchResponse = await res.json();  
    
    const places: Place[] = data.features.map((feature) => {
        return {
            id: feature.properties.place_id,
            name: feature.properties.display_name,
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
        };
    });

    return places;
};