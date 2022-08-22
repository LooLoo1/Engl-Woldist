import React, { useState } from 'react';
import './Main.css';
import Header from '../../Header/Header';
import WordsList from '../../WordsList/WordsList';
import Footer from '../../Footer/Footer';

function Main(props) {
	let [calcGapT, setCalcGapT] = useState(0)
	let [calcGapB, setCalcGapB] = useState(0)


	let wordListGapTop = (e) => {
		setCalcGapT(() => { return e.current.clientHeight })
	}
	let wordListGapBottom = (e) => {
		setCalcGapB(() => { return e.current.clientHeight })
	}

	return (
		<div className='conteiner'>
			<Header calcHeight={(e) => { wordListGapTop(e) }} />
			<WordsList fixedGapT={calcGapT} fixedGapB={calcGapB}></WordsList>
			<Footer calcHeight={(e) => { wordListGapBottom(e) }} footerH={calcGapB} />
		</div>
	)
}


export default Main
