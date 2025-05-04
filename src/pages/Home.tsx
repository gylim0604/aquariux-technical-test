import { useLocation } from 'react-router-dom';
import WeatherForecast from '../features/weatherForecast/WeatherForecast';
import WeatherSummary from '../features/weatherSummary/WeatherSummary';

export default function Home() {
	const location = useLocation();
	const { city, countryCode } = location.state || { city: 'Singapore', countryCode: '' };

	return (
		<>
			<WeatherSummary city={city} countryCode={countryCode} />
			<div className='py-4'>
				<WeatherForecast city={city} countryCode={countryCode} />
			</div>
		</>
	);
}
