import React from 'react';
import './Button.css';

function NumberButton(props) {
	return <button className={props.buttonStyle}>{props.textProp}</button>;
}

export default NumberButton;
