import { get } from '../../../lib/apiClient';
import { Location } from '../../../shared';
import { ForecastData } from '../types';

export async function getWeatherForecast(params: Location): Promise<ForecastData> {
	const { lat, lon } = params;
	return get<ForecastData>('data/2.5/forecast', { lat, lon, units: 'metric' });
}
