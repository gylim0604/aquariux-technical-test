import { useState } from 'react';
import { searchLocation } from './searchLocation';
import { GeoResult } from '../../types/location';

export function useSearchLocation() {
	const [result, setResult] = useState<GeoResult | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

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
			}
		} catch {
			setError('Failed to search location');
		} finally {
			setIsLoading(false);
		}
	}

	return { result, error, isLoading, search };
}
