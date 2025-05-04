import React from 'react';
import { useSearchLocation } from '../features/searchLocation/useSearchLocation';
import { Location } from '../types/location';
import { useNavigate } from 'react-router-dom';

export default function Search() {
	const { result, error, isLoading, search } = useSearchLocation();
	const navigate = useNavigate();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		await search(formData.get('searchQuery') as string);
	}

	if (result) {
		console.log(result);
		const location: Location = {
			city: result.name,
			countryCode: result.country,
		};
		navigate('/', { state: location });
	}
	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-row items-baseline gap-4'>
				<span>
					<input className='py-2 px-4 bg-white rounded-md shadow-md w-3xs' type='text' placeholder='Search country or city here...' name='searchQuery' />
					{error && <p className='text-red-500'>Invalid country or city</p>}
				</span>
				<button className='py-2 px-4 bg-blue-500 text-white rounded-md shadow-md' type='submit'>
					Search
					{isLoading && <p>Loading...</p>}
				</button>
			</form>
		</>
	);
}
