import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
	//This method only exists as a performance optimization. Use
	//shouldComponentUpdate() to let React know if a component’s output is not
	//affected by the current change in state or props. The default behavior is
	//to re-render on every state change, and in the vast majority of cases you
	//should rely on the default behavior.
	//shouldComponentUpdate here says only update if there is a change in show status of modal.
	shouldComponentUpdate(nextProps, nextState){
		return nextProps.show !== this.props.show;
	}
	componentWillUpdate(){
		console.log('[Modal] Will Update')
	}
	render(){
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
				<div 	className={classes.Modal}
							style={{
								transform: this.props.show ? 'translate(0)': 'translateY(-100vh)',
								opacity: this.props.show ? '1': '0'
							}}>
						{this.props.children}
				</div>
			</Aux>
		)
	}
} 

export default Modal;