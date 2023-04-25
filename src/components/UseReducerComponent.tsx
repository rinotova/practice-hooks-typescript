import { useReducer } from 'react';

const initialState = {
  counter: 100,
};

type ACTION_TYPES =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

const counterReducer = (state: typeof initialState, action: ACTION_TYPES) => {
  const currentCount = state.counter;
  switch (action.type) {
    case 'increment':
      return { ...state, counter: currentCount + action.payload };
    case 'decrement':
      return { ...state, counter: currentCount - action.payload };
    default:
      throw new Error('Bad action');
  }
};

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      {state.counter}

      <button
        onClick={() =>
          dispatch({
            type: 'increment',
            payload: 100,
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'decrement',
            payload: 50,
          })
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default UseReducerComponent;
