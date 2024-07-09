import logo from './logo.svg';
import {act} from 'react'
import './App.css';
import Counter from './Counter';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
    </div>
  );
}

export default App;
