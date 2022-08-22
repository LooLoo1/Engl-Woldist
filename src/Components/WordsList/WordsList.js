import React, { useState } from 'react'

import json from '../LocalStorage';
import Word from '../Word/Word';
import './WordsList.css';


function WordsList(props) {
	let [mStyle, setMStyle] = useState({})
	let gapCalculateT = (gap) => {
		return {
			marginTop: props.fixedGapT + gap + "px"
		}
	}
	let gapCalculateB = (gap) => {
		return {
			marginBottom: props.fixedGapB + gap + "px"
		}
	}

	let newStyle = async () => {
		setMStyle(Object.assign(await gapCalculateT(25), await gapCalculateB(0)))
	}
	newStyle()
	return (
		<div className='block center wordsList' style={mStyle}>
			{
				json.map(e => (
					<Word key={e.id} word={e.word} lvl={e.lvl} />
				))
			}
		</div>
	)
}


export default WordsList
