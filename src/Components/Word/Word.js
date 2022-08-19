import React from 'react'
import './Word.css';
import IconLevel from '../IconLevel/IconLevel';


function Word(props) {
	return (
		<div className='wordItem'>
			<h2>{props.word}</h2>
			<IconLevel lvl={props.lvl} />
		</div>
	)
}


export default Word
