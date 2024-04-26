import { combineReducers } from "@reduxjs/toolkit";
import { randomFactReducer } from "./randomFact";


const rootReducer = combineReducers({
    randomFact : randomFactReducer
});

export { rootReducer};