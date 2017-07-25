// import { Platform } from 'react-native';
// import { NavigationActions, StackNavigator } from 'react-native';

// import { StackOverTabs } from '../../routes';
// import * as types from '../actions/types';

// export const AppNavigator = StackNavigator(StackOverTabs, {
// 	initialRouteName: 'Home',
// 	headerMode: 'none',
// 	mode: Platform.OS === 'ios' ? 'modal' : 'card',
// });

// const initialNavState = {
// 	index: 0,
// 	routes: [
// 		{
// 			key: 'Home',
// 			routeName: 'Home',
// 			routes: [
// 				{ key: 'Home', routeName: 'Home' },
// 				{ key: 'About', routeName: 'About' },
// 			],
// 			index: 0,
// 		},
// 	],
// };

// function navigateAction({routeName, id}) {
// 	return NavigationActions.navigate({routeName, params: {id}});
// }

// export const navigationReducer = {
// 	nav: (state = initialNavState, action) => {
// 		switch(action.type) {
// 			case 'Navigation/NAVIGATE':
// 				return AppNavigator.router.getStateForAction(navigateAction(action), state);
// 			case types.NAVIGATE_BACK:
// 				return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
// 			case types.NAVIGATE_HOME: {
// 				const resetState = {
// 					index: 0,
// 					actions: [
// 						NavigationActions.navigate({routeName: 'Home'}),
// 					],
// 				};
// 				return AppNavigator.router.getStateForAction(NavigationActions.reset(resetState), state);
// 			}
// 			default : return state;
// 		}

// 	},
// };