// Add store creation, root reducer

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { coursesReducer } from './courses/reducer';
import { allAuthorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
	coursesReducer,
	allAuthorsReducer,
	userReducer,
});

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(ReduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
