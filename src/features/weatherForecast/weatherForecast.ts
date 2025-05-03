import { get } from '../../lib/apiClient';
import { Location } from '../weatherSummary/types';
import { ForecastData } from './types';

export async function getWeatherForecast(params: Location): Promise<ForecastData> {
	const { city, countryCode } = params;
	return get<ForecastData>('data/2.5/forecast', { q: `${city},${countryCode}`, units: 'metric' });
}
