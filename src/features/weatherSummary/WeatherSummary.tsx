import { Location } from './types';
import { useWeather } from './useWeatherSummary';

export default function WeatherSummary(params: Location) {
	const { data, loading, error } = useWeather(params);

	function getCurrentDate() {
		const options: Intl.DateTimeFormatOptions = {
			month: 'long', // 'long' gives full month name
			day: '2-digit',
			year: 'numeric',
		};

		return new Date().toLocaleDateString('en-US', options);
	}

	function metersToKm(value: number): string {
		return (value / 1000).toFixed(0);
	}

	if (loading) return <p>Loading...</p>;
	if (error || !data) return <p> Error: {error}</p>;

	return (
		<div className='rounded-xl w-md bg-white shadow-md p-4 grid grid-rows-[1fr_3fr_2fr]'>
			<div>{getCurrentDate()}</div>
			<div className='flex flex-row justify-evenly'>
				<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='weather icon' />
				<span>
					<p className='text-4xl font-semibold tracking-wider'>{data?.main.temp.toFixed(0)}&deg;C</p>
					<p className='text-zinc-700 first-letter:uppercase'>{data.weather[0]?.description}</p>
				</span>
			</div>
			<div className='flex flex-row justify-evenly'>
				<span className='text-center'>
					<p className='text-zinc-400'>Humidity</p>
					<p className='font-semibold'>{data.main.humidity}%</p>
				</span>
				<span className='text-center'>
					<p className='text-zinc-400'>Winds</p>
					<p className='font-semibold '>
						<span className={`inline-block text-sm rotate-[${data.wind.deg}deg]`}>&#129121;</span> {data.wind.speed} m/s
					</p>
				</span>
				<span className='text-center'>
					<p className='text-zinc-400'>Visibility</p>
					{/* TODO: Convert */}
					<p className='font-semibold'>{metersToKm(data.visibility)} km</p>
				</span>
			</div>
		</div>
	);
}
