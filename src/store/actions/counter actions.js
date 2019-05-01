
const Counter_Actions = (state, action) => {
    switch(action.type){
        case 'INCREAMENT':
            return {
                counter: state.counter + 1
            }
            
        case 'DECREAMENT':
            return {
                counter: state.counter - 1
            }

        default:
            return state;
    }
};

export default Counter_Actions ;