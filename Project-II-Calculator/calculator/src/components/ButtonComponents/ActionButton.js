import React from 'react';
import './Button.css';

const ActionButton = props => {
	const { action } = props;
	return (
		<div className='action-button'>
			<div className='clear'>
				<button>{action.clear}</button>
			</div>
			<div className='clear'>
				<button>{action.zero}</button>
			</div>
		</div>
	);
};

export default ActionButton;
