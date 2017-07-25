import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';	

const {
	ScrollView,
	View,
	TextInput,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet,
} = ReactNative;

class About extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return(
			<View>
				
			</View>
		)
	}
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(About);