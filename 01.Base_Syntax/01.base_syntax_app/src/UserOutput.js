import React from 'react';
import './Card.css'

const UserOutput = (props) => {
	return (
		<div className="Card">
			<p>{props.name} is learning React.</p>
			<p>{props.name} is {props.profession}.</p>
		</div>
		)
	}

export default UserOutput;