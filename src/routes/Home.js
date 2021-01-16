import React, {useState} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {add, remove} from "../store";
import ToDo from "../components/ToDo";

function Home(props){
    const {
        addToDo,
        deleteToDo,
        toDos
    } = props;
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return(
        <Container>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder={"Text Todo..."} value={text} onChange={onChange} />
                <button type="submit ">ADD</button>
            </form>
            <ul>
                {
                    toDos.map((item)=>{
                        return <ToDo {...item} key={item.id} deleteToDo={deleteToDo} />
                    })
                }
            </ul>
        </Container>
    )
}

function mapStateToProps(state){
    return {toDos: state};
}
function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(add(text)),
        deleteToDo: id  => dispatch(remove(id))
    };
}

const Container  = styled.div`

`

export default connect(mapStateToProps, mapDispatchToProps)(Home);