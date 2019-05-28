import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
	const { display } = props;
	return (
		<div className='calculator-display'>
			<h1>{display.total}</h1>
		</div>
	);
};

export default CalculatorDisplay;
