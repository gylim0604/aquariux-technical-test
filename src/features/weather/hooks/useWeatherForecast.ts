import { useEffect, useState } from 'react';
import { getWeatherForecast } from '../api/weatherForecast';
import { Location } from '../../../shared';
import { ForecastData, ForecastEntry, GroupedForecast } from '../types';

function processForecastData(data: ForecastData): any {
	const grouped = data.list.reduce((prev: any, curr: ForecastEntry) => {
		const date = curr.dt_txt.split(' ')[0];
		if (!prev[date]) prev[date] = [];
		prev[date].push(curr);
		return prev;
	}, {} as Record<string, ForecastEntry[]>);

	return Object.entries(grouped).map(([date, entries]) => ({
		date,
		entries,
	}));
}

export function useWeatherForecast(params: Location) {
	const [data, setData] = useState<GroupedForecast[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await getWeatherForecast(params);
				const data = processForecastData(res);
				setData(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [params]);

	return { data, loading, error };
}
