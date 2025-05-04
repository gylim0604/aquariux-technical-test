import { get } from '../../lib/apiClient';
import { WeatherData } from '../../types/weatherSummary';
import { Location } from '../../types/location';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getCurrentWeather(params: Location): Promise<WeatherData> {
	const { lat, lon } = params;
	return get<WeatherData>('data/2.5/weather', { lat, lon, units: 'metric' });
}
