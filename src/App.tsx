import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';


function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;