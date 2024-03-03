import React, { useReducer } from "react";
import { reducer } from "./ReducerHook";

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Counter!</h1>
      <div>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}
                disabled={state.count <= 0}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
