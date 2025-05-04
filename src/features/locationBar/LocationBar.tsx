import { useState } from 'react';
import { Location } from '../../types/location';
import { MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LocationBar() {
	const [location, setLocation] = useState<Location>({ city: 'Singapore', countryCode: 'SG' });

	return (
		<div className='flex flex-row gap-2 w-md items-center justify-end'>
			<MapPin size={18} />
			<p className='font-semibold'>
				{location.city},{location.countryCode}
			</p>
			<Link to={'/search'} className='ml-auto'>
				<Search size={18} />
			</Link>
		</div>
	);
}
