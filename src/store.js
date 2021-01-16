import {createStore} from "redux";
import {createAction, createReducer} from "@reduxjs/toolkit";

//define action name
/*const ADD = "ADD";

//action creator
/*const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}*/
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

//reducer
/*const reducer = (state = [], action) => {
    switch (action.type){
        case addToDo.type:
            return [{text:action.payload, id:Date.now()}, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}*/
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({text:action.payload, id:Date.now()});
    },
    [deleteToDo]: (state, action) =>
        state.filter(toDo => toDo.id !== action.payload)
 })

//export action creators
export const actionCreators = {
    addToDo,
    deleteToDo
}

//create store
const store = createStore(reducer);

//export
export default store;