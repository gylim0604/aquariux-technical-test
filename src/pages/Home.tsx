import { LocationBar } from '../features/locationBar/LocationBar';
import WeatherForecast from '../features/weatherForecast/WeatherForecast';
import WeatherSummary from '../features/weatherSummary/WeatherSummary';

export default function Home() {
	return (
		<div className='bg-slate-200 '>
			<div className='bg-white py-2 flex flex-col items-center mb-4 top-0 sticky shadow-sm'>
				<LocationBar />
			</div>
			<div className=' bg-slate-200 flex flex-col items-center'>
				<WeatherSummary city={'Singapore'} countryCode={'SG'} />
				<div className='py-4'>
					<WeatherForecast city={'Singapore'} countryCode={'SG'} />
				</div>
			</div>
		</div>
	);
}
