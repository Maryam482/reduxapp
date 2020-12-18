const initialState = {
    counter:0
}
function CounterReducer(state=initialState, action){
   switch(action.type){
       case 'INCREMENT':
           return{
               ...state,
               counter: state.counter+1
           }
                 break;
           case 'DECREMENT':
               return{
                   ...state,
                   counter: state.counter-1
               }
                 break;
            default:
                return state
                 
   }
}

export default CounterReducer