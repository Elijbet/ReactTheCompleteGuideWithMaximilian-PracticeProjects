import React from 'react';

const ValidationComponent = (props) => {
	if(props.length < 5) {
		return <h1>Text too short.</h1>
	} else if(props.length > 5) {
		return <h1>Text too long.</h1>
	} else {
		return <h1>Can never make you happy, can I?</h1>
	}
}

export default ValidationComponent;