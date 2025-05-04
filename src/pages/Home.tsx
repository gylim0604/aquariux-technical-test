import { WeatherForecast, WeatherSummary } from '../features/weather';
import { useLocationStore } from '../shared';

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
