import { createStore } from "redux";

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

//define action name
const ADD = "ADD";
const MINUS = "MINUS";

//reducer
const countModifier = (count = 0, action) => {
    console.log('@@ count',count, action);
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
}

//create store
const countStore = createStore(countModifier);

//create action
const handleAdd = () => {
    countStore.dispatch({type: ADD});
}
const handleMinus = () => {
    countStore.dispatch({type: MINUS});
}
const onChange = () => {
    number.innerText =  countStore.getState();
}


//event
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


//subscribe 변화감지
countStore.subscribe(onChange);
