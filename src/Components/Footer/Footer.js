import React, { useEffect, useRef } from 'react'
import './Footer.css';

import Button from '../Button/Button';


function Footer(props) {
	const footerRef = useRef(null);
	useEffect(() => {
		props.calcHeight(footerRef)
	}, []);

	return (
		<footer ref={footerRef} className='block bottom'>
			<Button lvl={1} progres={'0/20'} />
			<Button lvl={2} progres={'0/50'} />
			<Button title="Train" progres={'0/20'} fHeight={props.footerH} />
		</footer>
	)
}


export default Footer
