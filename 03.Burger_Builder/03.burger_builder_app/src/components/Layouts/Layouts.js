import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layouts.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
	state = {
		showSideDrawer: true
	}
	SideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	}
	SideDrawerToggleHandler = () => {
		//clean way of setting the state if it depends on the old state
		//is by using a function
		this.setState((prevState)=>{
			return {showSideDrawer: !prevState.showSideDrawer}
		})
	}
	render(){
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
				<SideDrawer 
					open={this.state.showSideDrawer} 
					closed={this.SideDrawerClosedHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;