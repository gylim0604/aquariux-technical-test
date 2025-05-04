import WeatherForecast from '../features/weatherForecast/WeatherForecast';
import WeatherSummary from '../features/weatherSummary/WeatherSummary';
import { useLocationStore } from '../features/searchLocation/useSearchLocation';

export default function Home() {
	const { currentLocation } = useLocationStore();

	const city = currentLocation?.city || 'Singapore';
	const countryCode = currentLocation?.city || 'SG';

	return (
		<>
			<WeatherSummary city={city} countryCode={countryCode} />
			<div className='py-4'>
				<WeatherForecast city={city} countryCode={countryCode} />
			</div>
		</>
	);
}
