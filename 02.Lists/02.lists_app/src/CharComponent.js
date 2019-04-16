import './CharComponent.css'

import React from 'react';

const CharComponent = (props) => {
	return (
		<div className="CharComponent">
			<h1 onClick={props.click} >{props.letter}</h1>
		</div>
		)
	}

export default CharComponent;