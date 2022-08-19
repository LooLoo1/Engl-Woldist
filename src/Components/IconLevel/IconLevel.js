import React from 'react'
import './IconLevel.css';

function IconLevel(props) {
  return (
	 <div className='levelIcon' lvl={props.lvl}>
		<div></div>
		<div></div>
		<div></div>
	 </div>
  )
}


export default IconLevel
