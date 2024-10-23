import { useState } from 'react';
import type { Place } from '../api/Place';

export default function LocationSearch() {
    const [places, setPlaces] = useState<Place[]>([]);

    return (
        <div>
            <h1>Location Search</h1>
        </div>
    )
}