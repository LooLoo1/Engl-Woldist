import React, { useEffect, useRef } from 'react'
import './Header.css';

function Header(props) {
	const headerRef = useRef(null);
	useEffect(() => {
		props.calcHeight(headerRef)
	}, []);

	return (
		<header ref={headerRef} className='block top'>
			<h2>All the words</h2>
			<span>0/1000</span>
		</header>
	)
}


export default Header
