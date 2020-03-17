import React from 'react';
import './App.css';
import { AttestationComponent } from './AttestationComponent';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form >
          <AttestationComponent />
          <Button variant="contained">Générer</Button>
        </form>
      </header>
    </div>
  );
}

export default App;
