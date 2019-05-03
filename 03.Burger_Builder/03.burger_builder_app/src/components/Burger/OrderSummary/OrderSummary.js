import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import classes from '../../UI/Button/Button.css';

class orderSummary extends Component {
	//Check to see if component updates before modal is called. This would mean we need to optimize it.
	componentWillUpdate(){
		console.log('[OrderSummary] Will Update')
	}
	render(){
		const ingredientSummary = Object.keys(this.props.ingredients)
		.map(igKey => {
			return(
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
				</li>
			)
		})
		return(
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
					<ul>
						{ingredientSummary}
					</ul>
					<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
					<p>Continue to Checkout?</p>
					<Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
					<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</Aux>
		);
	}
};

export default orderSummary;