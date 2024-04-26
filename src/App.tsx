import { useState } from 'react';
import './App.css'
import RandomFact from './components/RandomFact';
import GetFact from './components/GetFact';


// x hämta en fakta från api och skriv ut till konsolen 
// x visa upp en faktan på sidan
// x skapa en knapp
// x visa den fakt som vi hämtar i stället  

// reducer och actions (slice) 
// store



function App() {
 

  return (
    <>
      <GetFact />
      <RandomFact />
    </>
  )
}


export default App
