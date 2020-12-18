import React,{useState} from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';
import {Provider} from 'react-redux'
import store from './store/Store'
import './App.css';

function App() {
  const[counter, setCounter] = useState(0)
  return (
    <Provider store={store}>
    <div className="App">
      <CounterOutput/>
     <br/>
     <CounterInput />
    </div>
    </Provider>
  );
}

export default App;
