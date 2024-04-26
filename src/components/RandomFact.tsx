import { useState } from "react";

function RandomFact() {
    const [randomFact, setRandomFact] = useState<string>('Hej');


    
    return (
        <>
            {randomFact}
        </> 
    )
}

export default RandomFact;