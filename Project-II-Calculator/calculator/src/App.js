import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
	const NumberProfile = {
		divide : '/',
		seven  : 7,
		eight  : 8,
		nine   : 9,
		times  : 'X',
		four   : 4,
		five   : 5,
		six    : 6,
		minus  : '-',
		one    : 1,
		two    : 2,
		three  : 3,
		plus   : '+',
		equal  : '=',
	};
	const ActionProfile = {
		clear : 'clear',
		zero  : 0,
	};
	const DisplayProfile = {
		total : 0,
	};

	return (
		<div className='app'>
			<CalculatorDisplay display={DisplayProfile} />
			<div className='bottom'>
				<div className='left'>
					<NumberButton number={NumberProfile} />
				</div>
				<div className='right'>
					<ActionButton action={ActionProfile} />
				</div>
			</div>
		</div>
	);
};

export default App;
