import {createStore} from 'redux';
import  Reducer  from './Reducers';



export const Store=createStore(Reducer);