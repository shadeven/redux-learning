import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const handleIncrement = () => {
  store.dispatch({
    type: 'INCREMENT'
  })
}

const handleDecrement = () => {
  store.dispatch({
    type: 'DECREMENT'
  })
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();