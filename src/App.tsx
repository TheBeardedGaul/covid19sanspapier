import React, { useState } from 'react';
import './App.css';
import { AttestationComponent } from './AttestationComponent';

function App() {
    const [identiteState, setIdentiteState] = useState<string>();
    const [dateNaissanceState, setDateNaissanceState] = useState<string>();
    const [adresseState, setAdresseState] = useState<string>();
    const [option1State, setOption1State] = useState<boolean>();
    const [option2State, setOption2State] = useState<boolean>();
    const [option3State, setOption3State] = useState<boolean>();
    const [option4State, setOption4State] = useState<boolean>();
    const [option5State, setOption5State] = useState<boolean>();
    const [genereState, setGenereState] = useState<boolean>(false);
    const [lieuState, setLieuState] = useState<string>();
    const [dateAttestationState, setDateAttestationState] = useState<string>();

  return (
    
    <div className="App">
      <header className="App-header">
        {!genereState && (<form >
          <AttestationComponent identite={identiteState} dateNaissance={dateNaissanceState}
          adresse={adresseState} option1={option1State} option2={option2State}
          option3={option3State} option4={option4State} option5={option5State}
          lieu={lieuState} dateAttestation={dateAttestationState}
          setIdentiteState={setIdentiteState} setDateNaissanceState={setDateNaissanceState}
          setAdresseState={setAdresseState} setOption1State={setOption1State} setOption2State={setOption2State}
          setOption3State={setOption3State} setOption4State={setOption4State} setOption5State={setOption5State}
          setLieuState={setLieuState} setDateAttestationState={setDateAttestationState}/>
          </form>)}
      </header>
    </div>
  );
}

export default App;
