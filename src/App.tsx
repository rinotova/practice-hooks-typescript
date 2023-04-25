import './App.css';
import UseContextComponent from './components/UseContextComponent';
import UseCustomHookComponent from './components/UseCustomHookComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComponent from './components/UseRefComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  return (
    <div>
      <h1>Custom hook component</h1>
      <UseCustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
