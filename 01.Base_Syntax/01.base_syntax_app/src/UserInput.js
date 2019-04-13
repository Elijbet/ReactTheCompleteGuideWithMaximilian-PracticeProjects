import React from 'react';
import './Card.css'

const UserInput = (props) => {
	return (
		<div className="Card">
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		)
	}

export default UserInput;