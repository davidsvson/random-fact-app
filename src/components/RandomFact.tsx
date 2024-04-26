
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { FactStatus } from "../features/randomFact";

function RandomFact() {
    
    const randomFact = useSelector((state : RootState ) => state.randomFact );

    let content : string | null  = null;
    switch(randomFact.status) {
        case FactStatus.NORMAL :
            content = 'Ready for a fact?';
            break;
        case FactStatus.FETCHING :
            content = "Waiting for a fact...";
            break;
        case FactStatus.SUCCESS :
            content = randomFact.fact;
            break;
        default :
            content = 'No fact available';
    }

    return (
        <>
            {content}
        </> 
    )
}

export default RandomFact;