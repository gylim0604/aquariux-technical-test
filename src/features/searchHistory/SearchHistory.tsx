import { Search, Trash } from 'lucide-react';
import { Location } from '../../types/location';
import { useNavigate } from 'react-router-dom';
import { useLocationStore } from '../../stores/locationStore';

export default function SearchHistory() {
	const { searchHistory, setLocation, removeFromHistory } = useLocationStore();
	const navigate = useNavigate();

	if (searchHistory.length === 0) return;

	function goTo(el: Location): void {
		setLocation(el);
		navigate('/');
	}

	function deleteSearchItem(el: Location): void {
		removeFromHistory(el);
	}

	return (
		<div className='w-xs xs:w-sm'>
			<h4 className='font-semibold mb-4'>Search History</h4>
			<div className='bg-white py-6 px-4 rounded-xl shadow-sm'>
				{searchHistory.map((el: Location) => (
					<div key={`${el.lat}-${el.lon}`} className='flex flex-row gap-4 py-2'>
						<p className='mr-auto'>
							{el.city}, {el.countryCode}
						</p>
						<button type='button' onClick={() => goTo(el)} className='cursor-pointer'>
							<Search size={18} />
						</button>
						<button type='button' onClick={() => deleteSearchItem(el)} className='cursor-pointer'>
							<Trash size={18} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
