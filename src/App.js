import React from 'react';
import WelcomeSlider from './components/WelcomeSlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to MikeNet</h1>
      </header>
      <main>
        <WelcomeSlider />
        <div className="content-placeholder">
          <p>Future content will be added here.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
