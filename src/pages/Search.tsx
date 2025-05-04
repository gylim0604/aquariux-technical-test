import { SearchHistory, SearchInput } from '../features/search';

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
