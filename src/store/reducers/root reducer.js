import { combineReducers } from 'redux';

import Counter_Reducer from './counter reducer';


const Root_Reducer = combineReducers (
    { 
        Counter_Reducer
    }
);

export default Root_Reducer ;