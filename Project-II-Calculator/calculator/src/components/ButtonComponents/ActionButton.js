import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

function ActionButton() {
	return (
		<div>
			<div className='action-button'>
				<div className='zero'>
					<p>0</p>
				</div>
			</div>
			<div className='clear-row'>
				<NumberButton textProp='clear' buttonStyle='button-large' />
				<NumberButton textProp='/' buttonStyle='button-red' />
			</div>
		</div>
	);
}

export default ActionButton;
