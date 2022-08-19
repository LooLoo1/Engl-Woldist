import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import WordsList from '../Components/WordsList/WordsList';
import Footer from '../Components/Footer/Footer';

function App() {
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
	);
}

export default App;
