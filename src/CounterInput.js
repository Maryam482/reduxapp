import React from 'react';
import {useDispatch} from 'react-redux'
import { inAction } from './store/action';
import { decAction } from './store/action';
import{useSelector} from 'react-redux'

// function CounterInput(props) {
// function CounterInput({counter,setCounter}){ 
    function CounterInput(){
        const dispatch = useDispatch();
        const counter = useSelector(state => state.counter)   
    return (
        <div>
         {/* <button onClick = {() => props.setCounter(props.counter+1)}>+</button> */}
         {/* OR */}
        {/* <button onClick = {() => setCounter(counter+1)}>+</button> */}
        <h3>Direct distaching actions</h3>
        <button onClick = {() => dispatch({type : 'INCREMENT'})}>+</button>
        {/* <button onClick = {() => props.setCounter(props.counter-1)}>-</button> */}
        {/* OR */}
        {/* <button onClick = {() => setCounter(counter-1)}>-</button>  */}
        <button onClick= {() => dispatch({type:'DECREMENT'})}>-</button>
       
       <br/>
       <br/>

       Counter Value : {counter}
<h3>Dispatching actions through functions</h3>
<button onClick = {() => dispatch(inAction())}>+</button>
<button onClick= {() => dispatch(decAction())}>-</button>
</div>

    )
}

export default CounterInput
