import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

function CalculatorDisplay() {
	return (
		<div className='total'>
			<ActionButton />
			<div className='row1'>
				<NumberButton textProp='7' buttonStyle='button-white' />
				<NumberButton textProp='8' buttonStyle='button-white' />
				<NumberButton textProp='9' buttonStyle='button-white' />
				<NumberButton textProp='X' buttonStyle='button-red' />
			</div>
			<div className='row2'>
				<NumberButton textProp='4' buttonStyle='button-white' />
				<NumberButton textProp='5' buttonStyle='button-white' />
				<NumberButton textProp='6' buttonStyle='button-white' />
				<NumberButton textProp='-' buttonStyle='button-red' />
			</div>
			<div className='row3'>
				<NumberButton textProp='1' buttonStyle='button-white' />
				<NumberButton textProp='2' buttonStyle='button-white' />
				<NumberButton textProp='3' buttonStyle='button-white' />
				<NumberButton textProp='+' buttonStyle='button-red' />
			</div>
			<div className='row4'>
				<NumberButton textProp='0' buttonStyle='button-large' />
				<NumberButton textProp='=' buttonStyle='button-red' />
			</div>
		</div>
	);
}

export default CalculatorDisplay;
