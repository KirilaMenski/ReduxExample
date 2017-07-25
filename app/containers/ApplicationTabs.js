import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Home from './Home'
import About from './About'

const ScrollableTabView = require('react-native-scrollable-tab-view');

class ApplicationTabs extends Component {

	renderScene(component, label){
		return (
			<View style={{ flex: 1, }}>
				{ React.createElement(component, this.props) }
			</View>
		)
	}

	render(){
		return(
			<ScrollableTabView style={{flex: 1, }}>
				<Home key='1' {...this.props} tabLabel={'Home'}/>
				<About key='2' tabLabel='About' />
			</ScrollableTabView>
		)
	}

}

function mapStateToProps(state) {
	return {

	}
}

export default connect(mapStateToProps)(ApplicationTabs);