import { get } from '../../../lib/apiClient';
import { Location } from '../../../shared';
import { WeatherData } from '../types';

export async function getCurrentWeather(params: Location): Promise<WeatherData> {
	const { lat, lon } = params;
	return get<WeatherData>('data/2.5/weather', { lat, lon, units: 'metric' });
}
