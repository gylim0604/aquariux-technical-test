import { Outlet } from 'react-router-dom';
import { LocationBar } from '../shared';

export default function MainLayout() {
	return (
		<div className='bg-slate-200  min-h-screen '>
			<div className='bg-white py-2 flex flex-col items-center mb-4 top-0 sticky shadow-sm'>
				<LocationBar />
			</div>
			<div className='flex flex-col items-center'>
				<Outlet />
			</div>
		</div>
	);
}
