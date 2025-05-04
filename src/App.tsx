import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MainLayout from './layouts/MainLayout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />}></Route>
				<Route path='/search' element={<Search />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
