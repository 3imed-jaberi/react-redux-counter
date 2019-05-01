import Counter_Actions from '../actions/counter actions';

const initState = { 
     counter : 0
} 

const Counter_Reducer = ( state = initState , action ) => {
          
     return Counter_Actions(state,action);
          
}

export default Counter_Reducer ;