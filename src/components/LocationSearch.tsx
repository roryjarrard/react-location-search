import { useState } from 'react';
import type { Place } from '../api/Place';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
};

export default function LocationSearch({onPlaceClick}: LocationSearchProps) {
    const [places, setPlaces] = useState<Place[]>([]);

    return (
        <div>
            <h1>Location Search</h1>
        </div>
    )
}