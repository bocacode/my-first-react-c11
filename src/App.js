import Greeting from './components/Greeting';
import logo from './logo.svg';
import './App.css';

const students = ['Cihan', 'Max', 'Danny', 'Pat', 'Lorenzo']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {students.map(stud => (
          <Greeting name={stud} />
        ))}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm getting hungry!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (at Boca Code)
        </a>
        <Greeting name={"Kevin"} />
      </header>
    </div>
  );
}

export default App;
