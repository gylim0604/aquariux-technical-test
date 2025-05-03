import { useEffect, useState } from 'react';
import { getCurrentWeather } from './weatherSummary';
import { Location, WeatherData } from './types';

export function useWeather(params: Location) {
	const [data, setData] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		getCurrentWeather(params)
			.then(setData)
			.catch((err) => setError(err.messsage))
			.finally(() => setLoading(false));
	}, [params]);

	return { data, loading, error };
}
