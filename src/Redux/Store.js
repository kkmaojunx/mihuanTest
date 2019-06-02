import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { solveRandom } from './Reducers';

export const store = createStore(solveRandom, applyMiddleware(thunk));
