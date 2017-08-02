import { combineReducers } from 'redux';
import SignupReducer from './reducers_signup';

const rootReducer = combineReducers({
	signupStates: SignupReducer
});

export default rootReducer;