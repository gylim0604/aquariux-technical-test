import { get } from '../../lib/apiClient';
import { Location, WeatherData } from './types';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getCurrentWeather(params: Location): Promise<WeatherData> {
	const { city, countryCode } = params;
	return get<WeatherData>('data/2.5/weather', { q: `${city},${countryCode}`, units: 'metric' });
}
