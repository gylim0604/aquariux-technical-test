import { get } from '../../lib/apiClient';
import { GeoResult } from '../../types/location';

export async function searchLocation(query: string): Promise<GeoResult[]> {
	const parts = query.split(',').map((str) => str.trim());
	const city = parts[0];
	const countryCode = parts[1];
	const q = countryCode ? `${city},${countryCode}` : city;

	return get('geo/1.0/direct', { q });
}
