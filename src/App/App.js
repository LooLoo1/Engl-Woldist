import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import './App.css';
import Main from '../Components/Pages/Main/Main';
import Simulator from '../Components/Pages/Simulator/Simulator';
import Error from '../Components/Pages/Error/Error';

function App() {


	return (
		< >
			<Router>
				<Routes>
					{/* <Route exact path='/' element={<Main/>} /> */}
					<Route exact path='/Engl-Woldist' element={<Main/>} />
					{/* <Route exact path='/:simulatorName' element={<Simulator/>} /> */}
					<Route exact path='/Engl-Woldist/:simulatorName' element={<Simulator/>} />
					<Route exact path='*' element={<Error/>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
