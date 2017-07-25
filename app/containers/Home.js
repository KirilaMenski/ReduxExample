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

	constructor(props){
		super(props);
		this.state = {
			searching: false,
			ingredientsInput: 'ingredients',
		}
	}

	searchPressed() {
		this.setState({searching: true});
		this.props.fetchRecipes(this.state.ingredientsInput).then( () => {
			this.setState({ searching: false});
		});
	}

	recipes() {
		return Object.keys(this.props.searchedRecipes).map( key => this.props.searchedRecipes[key] )
	}

	render() {
		return(
			<View>
				<View style={styles.searchSection}>
					<TextInput style={styles.searchInput} 
						returnKeyType='search'
						placeholder='Ingredients (comma delimited)'
						onChangeText={ (ingredientsInput) => this.setState({ingredientsInput})}
						value={this.state.ingredientsInput}
					/>
					<TouchableHighlight onPress={ () => this.searchPressed() } style={styles.searchButton}>
						<Text>Fetch Recipes</Text>
					</TouchableHighlight>
				</View>

				<ScrollView style={styles.scrollSection}>
					{!this.state.searching && this.recipes().map((recipe) => {
						return <View key={recipe.href + recipe.title}>
							<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
							<Text style={styles.resultTitle}>{recipe.title}</Text>
						</View>
					})}
					{this.state.searching ? <Text>Searching...</Text> : null}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create(
{	scene:{
		flex: 1,
		marginTop: 20,
	},
	searchSection:{
		height: 40,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	scrollSection:{
	},
	searchInput:{
		flex: 0.7,
	},
	searchButton:{
		flex: 0.3,
	},
	resultImage:{
		height: 150,
	},
	resultTitle:{
		backgroundColor: '#000',
		color: '#fff',
		height: 20, 
	},
});

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home);