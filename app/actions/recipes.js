import * as types from './types';
import Api from '../lib/Api';

export function fetchRecipes(ingredients) {
	return(dispatch, getSate) => {
		const params = [
			`i=${encodeURIComponent(ingredients)}`,
			'fillIngredients=false',
			'limitLicense=false',
			'number=20',
			'ranking=1',
		].join('&');
		return Api.get(`/api/?${params}`).then((resp) => {
			dispatch(setSearchedRecipes({ recipes: resp }));
		}).catch( (ex) => {
			console.log(ex);
		})
	}
}

export function setSearchedRecipes({ recipes }) {
	return {
		type: types.SET_SEARCHED_RECIPES,
		recipes
	}
}

export function addRecipe() {
	return {
		type: types.ADD_RECIPE,
	}
}