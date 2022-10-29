import './App.css';
import Weather from './Weather';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Weather city="Paris"/>
      </header>
    </div>
  );
}

export default App;
