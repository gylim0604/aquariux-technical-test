import { WeatherData } from './types';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getCurrentWeather(params: { city: string; countryCode: string }): Promise<WeatherData> {
	const { city, countryCode } = params;
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
	if (!res.ok) throw new Error('Failed to fetch current weather');
	return res.json();
}
