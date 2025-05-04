import { Location } from '../../types/location';
import { useWeatherForecast } from './useWeatherForecast';

export default function WeatherForecast(params: Location) {
	const { data, loading, error } = useWeatherForecast(params);

	function convertDateString(date: string): string {
		const options: Intl.DateTimeFormatOptions = {
			month: 'long', // 'long' gives full month name
			day: '2-digit',
		};
		const currDate = new Date(date).toDateString();
		if (new Date().toDateString() === currDate) return 'Today';

		return new Date(date).toLocaleDateString('en-GB', options);
	}

	function formatTime(dateTime: string): string {
		return dateTime.split(' ')[1].slice(0, 5);
	}

	if (loading) return <p>Loading...</p>;
	if (error || !data) return <p> Error: {error}</p>;

	return (
		<>
			<h4 className='font-semibold mb-4'>5-day Forecast(3 Hours)</h4>
			<div className='rounded-xl w-sm bg-white shadow-sm p-4 '>
				{data.map(({ date, entries }) => (
					<div key={date} className='mt-6 first-of-type:mt-0'>
						<h3 className='text-md text-zinc-500 mb-4'>{convertDateString(date)}</h3>
						{entries.map((el) => (
							<div key={el.dt} className='flex flex-row items-center gap-4'>
								<p className='font-semibold'>{formatTime(el.dt_txt)}</p>
								<div className='flex flex-row items-center gap-2'>
									<img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt='weather icon' />
									<p className='text-sm text-zinc-500'>
										{el.main.temp_min.toFixed(2)} / {el.main.temp_max.toFixed(2)}&deg;C
									</p>
								</div>
								<p className='font-semibold text-right grow text-sm'>{el.weather[0].description}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
