import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ranked Choice Voting Simulator
        </p>
        </div>
        <a className="App-link" href="https://ballotpedia.org/Ranked-choice_voting_(RCV)" target="_blank" rel="noopener noreferrer">
          Learn More about RCV (Ranked-Choice Voting)
        </a>
      </header>
  );
}

export default App;
