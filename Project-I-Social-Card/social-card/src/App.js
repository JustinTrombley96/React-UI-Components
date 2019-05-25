import React from 'react';
import './App.css';

import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
	return (
		<div className='app'>
			<HeaderContainer />
			<CardContainer />
			<Footer />
		</div>
	);
};

export default App;
