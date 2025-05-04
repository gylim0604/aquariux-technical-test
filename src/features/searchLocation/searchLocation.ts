import { get } from '../../lib/apiClient';

export async function searchLocation(query: string): Promise<any> {
	const parts = query.split(',').map((str) => str.trim());
	const city = parts[0];
	const countryCode = parts[1];

	// If countryCode exists, include it in the query string
	const q = countryCode ? `${city},${countryCode}` : city;

	return get('geo/1.0/direct', { q });
}
