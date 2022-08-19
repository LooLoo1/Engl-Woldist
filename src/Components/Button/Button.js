import React from 'react'
import './Button.css';

import IconLevel from '../IconLevel/IconLevel';


function Button(props) {
	let styleFix = {}

	if (props.fHeight) {
		styleFix = {
			position: 'absolute',
			right: 30 + 'px',
			bottom: props.fHeight - 10 + 'px'
		}
	}

	return (
		<button className={props.className} style={styleFix}>
			<p>{props.title} {props.progres}</p>
			{props.lvl ? <IconLevel lvl={props.lvl} /> : ''}
		</button>
	)
}


export default Button
