import React, { useEffect, useRef } from 'react'
import {useLocation, NavLink} from "react-router-dom"
import './Footer.css';

import Button from '../Button/Button';


function Footer(props) {
	let url = useLocation();
	console.log(url);

	const footerRef = useRef(null);
	useEffect(() => {
		props.calcHeight(footerRef)
	}, []);

	return (
		<footer ref={footerRef} className='block bottom'>
			<NavLink to={`${url.pathname}/bedKnowWords`}>
				<Button lvl={1} progres={'0/20'} />
			</NavLink>
			<NavLink to={`${url.pathname}/remindWords`}>
				<Button lvl={2} progres={'0/50'} />
			</NavLink>
			<NavLink to={`${url.pathname}/newWords`}>
				<Button title="Train" progres={'0/20'} fHeight={props.footerH} />
			</NavLink>
		</footer>
	)
}


export default Footer
