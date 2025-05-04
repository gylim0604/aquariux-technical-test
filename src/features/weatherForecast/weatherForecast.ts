import { get } from '../../lib/apiClient';
import { Location } from '../../types/location';
import { ForecastData } from '../../types/forecast';

export async function getWeatherForecast(params: Location): Promise<ForecastData> {
	const { city, countryCode } = params;
	return get<ForecastData>('data/2.5/forecast', { q: `${city},${countryCode}`, units: 'metric' });
}
