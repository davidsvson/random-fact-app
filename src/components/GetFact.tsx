

function GetFact() {



    return (
          <button>Get fact!</button> 
    )

}

async function fetchFact(setRandomFact : React.Dispatch<React.SetStateAction<string>>) {

    const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';
  
    try {
        const response = await fetch(URL);
        const json = await response.json();
        const randomFact = json.text as String;
    } catch {
        console.log("error");
    }
   // console.log(randomFact);
   // setRandomFact(randomFact);
}

export default GetFact;