import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home name={'Todd'} age={2} />
      </header>
    </div>
  );
}

export default App;
