import { useState } from 'react';
import './App.css'


// x hämta en fakta från api och skriv ut till konsolen 
// x visa upp en faktan på sidan
// x skapa en knapp
// x visa den fakt som vi hämtar i stället  


function App() {
  const [randomFact, setRandomFact] = useState<string>('');

  return (
    <>
      <button onClick={() => fetchFact(setRandomFact)}>Get fact!</button>
      <p>
        {randomFact}
      </p>
    </>
  )
}


async function fetchFact(setRandomFact : React.Dispatch<React.SetStateAction<string>>) {

  const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

  const response = await fetch(URL);
  const json = await response.json();
  const randomFact = json.text;

  console.log(randomFact);
  setRandomFact(randomFact);
}


export default App
