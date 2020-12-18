import React from 'react';
import{useSelector} from 'react-redux'

// function CounterOutput(props) {
  // function CounterOutput({counter}) {
  function CounterOutput(){
   const counter = useSelector(state => state.counter)   
    return (
        <div>
            Counter Value : {counter}
        {/* Counter Value : {props.counter} */}
        {/* Counter Value : {counter} */}
        </div>
    )
}

export default CounterOutput
