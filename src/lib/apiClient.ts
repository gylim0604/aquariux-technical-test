import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.openweathermap.org/';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function get<T>(endpoint: string, params: Record<string, string | number>): Promise<T> {
	const query = new URLSearchParams({
		...Object.entries(params).reduce((acc, [k, v]) => {
			acc[k] = String(v);
			return acc;
		}, {} as Record<string, string>),
		appid: API_KEY,
	});
	const url = `${BASE_URL}/${endpoint}?${query.toString()}`;

	const res = await fetch(url);
	if (!res.ok) throw new Error('OpenWeather request failed');
	return res.json();
}
