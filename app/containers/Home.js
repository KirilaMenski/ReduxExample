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

class Home extends Component {

	searchPressed() {
		this.props.fetchRecipes('bacon, cucumber, banana');
	}

	recipes() {
		return Object.keys(this.props.searchedRecipes).map( key => this.props.searchedRecipes[key] )
	}

	render() {
		return(
			<View>
				<View style={styles.searchSection}>
					<TouchableHighlight onPress={ () => this.searchPressed() } style={styles.searchButton}>
						<Text>Fetch Recipes</Text>
					</TouchableHighlight>
				</View>

				<ScrollView style={styles.scrollSection}>
					{this.recipes().map((recipe) => {
						return <View key={recipe.thumbnail}>
							<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
							<Text style={styles.resultTitle}>{recipe.title}</Text>
						</View>
					})}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scene:{
		flex: 1,
		marginTop: 20,
	},
	searchSection:{
		height: 30,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		padding: 5,
	},
	scrollSection:{
	},
	resultImage:{
		height: 150,
	},
	resultTitle:{
		backgroundColor: '#000',
		color: '#fff',
		height: 20, 
	}

});

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home);