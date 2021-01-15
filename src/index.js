import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

//define action name
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//create store
const store = createStore(reducer);

//action creator
const addToDo = (text) => {
    return {
        type:ADD_TODO,
        text
    }
}
const deleteToDo = (id) => {
    return {
        type:DELETE_TODO,
        id
    }
}

//reducer
const reducer = (state = [], action) => {
    switch (action.type){
        default:
            return state;
        case ADD_TODO:
            return [
                {
                    text:action.text,
                    id:Date.now(),
                },
                ...state
            ];
        case DELETE_TODO:
            return [];
    }
}


//dispatch action
const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}
const dispatchDeleteToDo = (e) => {
     const id = e.target.parentNode.id;
     store.dispatch(deleteToDo(id));
}


const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        li.id = toDo.id;
        li.innerText = toDo.text;
        btn.innerText = "DEL";
        btn.style.marginLeft = '5px';
        btn.addEventListener("click", deleteToDo);
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

//subscribe
store.subscribe(()=> console.log(store.getState()));
store.subscribe(paintToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    addToDo(toDo);
}

form.addEventListener("submit", onSubmit);