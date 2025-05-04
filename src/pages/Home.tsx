import WeatherForecast from '../features/weatherForecast/WeatherForecast';
import WeatherSummary from '../features/weatherSummary/WeatherSummary';
import { useLocationStore } from '../features/searchLocation/useSearchLocation';

export default function Home() {
	const { currentLocation } = useLocationStore();

	return (
		<>
			<WeatherSummary {...currentLocation} />
			<div className='py-4'>
				<WeatherForecast {...currentLocation} />
			</div>
		</>
	);
}
