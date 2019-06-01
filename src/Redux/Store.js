import {createStore, applyMiddleware} from 'redux'
import {solveRandom} from './Reducers'
import thunk from 'redux-thunk';
export const store = createStore(solveRandom, applyMiddleware(thunk));


