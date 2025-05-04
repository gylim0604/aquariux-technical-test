import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocationStore } from '../../stores/locationStore';

export function LocationBar() {
	const { currentLocation } = useLocationStore();

	return (
		<div className='flex flex-row gap-2 w-md items-center justify-end'>
			<MapPin size={18} />
			<p className='font-semibold'>
				{currentLocation.city},{currentLocation.countryCode}
			</p>
			<Link to={'/search'} className='ml-auto'>
				<Search size={18} />
			</Link>
		</div>
	);
}
