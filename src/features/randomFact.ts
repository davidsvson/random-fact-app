import { createAction, createReducer } from "@reduxjs/toolkit";

export enum FactStatus {
    NORMAL,
    FETCHING,
    SUCCESS,
    FAILURE
}   

interface Fact {
    fact : string | null;
    status : FactStatus;
}

const initialState : Fact = {
    fact: null,
    status: FactStatus.NORMAL
}

const isFetching = createAction('is fetching fact');
const success = createAction<string>('success fact');
const failure = createAction('failure fact');

const factActions = {isFetching, success, failure};

const randomFactReducer = createReducer(initialState, builder => {
    builder
        .addCase(isFetching, (state)=> (
            {
                status : FactStatus.FETCHING,
                fact: state.fact   
            }
        ))
        .addCase(success, (state, action) => (
            {
                status: FactStatus.SUCCESS,
                fact: action.payload
            } 
        ))
        .addCase(failure, (state) => (
            {
                status: FactStatus.FAILURE,
                fact: state.fact
            }
        ))
})

export { factActions, randomFactReducer};

