import React from 'react';
import './Button.css';

const NumberButton = props => {
	const { number } = props;
	return (
		<div className='number-button'>
			<div className='clear-row'>
				<button>{number.divide}</button>
			</div>
			<div className='row1'>
				<div className='row1-1'>
					<button>{number.seven}</button>
				</div>
				<div className='row1-2'>
					<button>{number.eight}</button>
				</div>

				<div className='row1-3'>
					<button>{number.nine}</button>
				</div>

				<div className='row1-sign'>
					<button>{number.times}</button>
				</div>
			</div>
			<div className='row2'>
				<div className='row2-1'>
					<button>{number.four}</button>
				</div>
				<div className='row2-2'>
					<button>{number.five}</button>
				</div>

				<div className='row2-3'>
					<button>{number.six}</button>
				</div>

				<div className='row2-sign'>
					<button>{number.minus}</button>
				</div>
			</div>
			<div className='row3'>
				<div className='row3-1'>
					<button>{number.one}</button>
				</div>
				<div className='row3-2'>
					<button>{number.two}</button>
				</div>

				<div className='row3-3'>
					<button>{number.three}</button>
				</div>

				<div className='row3-sign'>
					<button>{number.plus}</button>
				</div>
			</div>
			<div className='zero-row'>
				<button>{number.equal}</button>
			</div>
		</div>
	);
};

export default NumberButton;
