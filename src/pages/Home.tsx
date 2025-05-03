import WeatherForecast from '../features/weatherForecast/WeatherForecast';
import WeatherSummary from '../features/weatherSummary/WeatherSummary';

export default function Home() {
	return (
		<div className=' bg-slate-200 flex flex-col items-center'>
			<WeatherSummary city={'Singapore'} countryCode={'SG'} />
			<WeatherForecast city={'Singapore'} countryCode={'SG'} />
		</div>
	);
}
