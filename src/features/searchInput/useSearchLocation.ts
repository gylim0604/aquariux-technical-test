import { useState } from 'react';
import { searchLocation } from './searchInput';
import { GeoResult } from '../../types/location';
import { useLocationStore, Location } from '../../shared';

export function useSearchLocation() {
	const [result, setResult] = useState<GeoResult[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { setLocation, addToHistory } = useLocationStore();

	async function search(query: string): Promise<void> {
		setIsLoading(true);
		setError(null);
		try {
			const res = await searchLocation(query);
			if (!res || !res.length) {
				setError('Location not found');
				setResult(null);
			} else {
				setResult(res);
				const location: Location = {
					city: res[0].name,
					countryCode: res[0].country,
					lat: res[0].lat,
					lon: res[0].lon,
				};
				setLocation(location);
				addToHistory(location);
			}
		} catch {
			setError('Failed to search location');
		} finally {
			setIsLoading(false);
		}
	}

	return { result, error, isLoading, search };
}
