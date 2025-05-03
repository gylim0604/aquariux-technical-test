import WeatherSummary from '../features/weatherSummary/WeatherSummary';

export default function Home() {
	return (
		<div className='container mx-auto bg-slate-200'>
			<WeatherSummary city={'Singapore'} countryCode={'SG'} />
		</div>
	);
}
