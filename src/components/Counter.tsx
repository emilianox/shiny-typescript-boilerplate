import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import { createContainer } from 'unstated-next';

export interface ICounterState {
  value: number;
}

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

export const CounterStateContainer = createContainer(useCounter);

export const Counter: React.FunctionComponent<RouteComponentProps> = () => {
  const counter = CounterStateContainer.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
};

export default Counter;
