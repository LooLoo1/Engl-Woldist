import React from 'react';
import './App.css';
import '../Components/LocalStorage'
import Header from '../Components/Header/Header';
import WordsList from '../Components/WordsList/WordsList';
import Footer from '../Components/Footer/Footer';

function App() {
	return (
		<div className='conteiner'>
			<Header />
			<WordsList></WordsList>
			<Footer />

		</div>
	);
}

export default App;
