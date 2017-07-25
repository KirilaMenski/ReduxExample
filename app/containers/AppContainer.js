import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Home from './Home';
import ApplicationTabs from './ApplicationTabs';

class AppContainer extends Component {

	addRecipe() {
		this.props.addRecipe();
	}

	render(){
		return(
			<ApplicationTabs {...this.props}/>
			// <Home {...this.props}/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);