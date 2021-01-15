import {createStore} from "redux";

//define action name
const ADD = "ADD";
const DELETE = "DELETE";

//action creator
const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}
const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}

//reducer
const reducer = (state = [], action) => {
    switch (action.type){
        case ADD:
            return [{text:action.text, id:Date.now()}, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

//export action creators
export const actionCreators = {
    addToDo,
    deleteToDo
}

//create store
const store = createStore(reducer);

//export
export default store;