import {createStore} from "redux";

import Counter_Reducer from './reducers/counter reducer';

const store = createStore(Counter_Reducer);

export default store ;