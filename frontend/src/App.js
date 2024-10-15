import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Bienvenue sur FlexiTime !');

  const handleChangeMessage = () => {
    setMessage('Merci d\'utiliser FlexiTime !');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={handleChangeMessage}>Changer le message</button>
      </header>
    </div>
  );
}

export default App;
