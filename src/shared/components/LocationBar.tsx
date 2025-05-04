import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocationStore } from '../stores/locationStore';

export default function LocationBar() {
	const { currentLocation } = useLocationStore();

	return (
		<div className='flex flex-row gap-2 w-xs xs:w-sm items-center justify-between'>
			<Link className='font-semibold flex flex-row items-center gap-2' to={'/'}>
				<MapPin size={18} />
				{currentLocation.city}, {currentLocation.countryCode}
			</Link>
			<Link to={'/search'}>
				<Search size={18} />
			</Link>
		</div>
	);
}
