import SearchHistory from '../features/searchHistory/SearchHistory';
import SearchInput from '../features/searchInput/SearchInput';

export default function Search() {
	return (
		<>
			<div className='mb-4'>
				<SearchInput />
			</div>

			<SearchHistory />
		</>
	);
}
