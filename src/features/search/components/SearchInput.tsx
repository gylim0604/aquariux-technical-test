import { useNavigate } from 'react-router-dom';
import { useSearchLocation } from '../hooks/useSearchLocation';
import { useEffect } from 'react';

export default function SearchInput() {
	const { result, error, isLoading, search } = useSearchLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (result) navigate('/');
	}, [result, navigate]);
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		await search(formData.get('searchQuery') as string);
	}
	return (
		<form onSubmit={handleSubmit} className='flex flex-row items-baseline gap-4 w-xs xs:w-sm'>
			<span className='grow'>
				<input className='py-2 px-4 bg-white rounded-md shadow-sm w-full' type='text' placeholder='Search country or city here...' name='searchQuery' />
				{error && <p className='text-red-500'>Invalid country or city</p>}
			</span>
			<button className='py-2 px-4 bg-blue-500  hover:bg-blue-400 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md shadow-sm' type='submit' disabled={isLoading}>
				Search
			</button>
		</form>
	);
}
