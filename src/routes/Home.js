import React, {useState} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {actionCreators} from "../store";

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
            <form onSubmit={onSubmit }>
                <input type="text" placeholder={"Text Todo..."} value={text} onChange={onChange} />
                <button type="submit ">ADD</button>
            </form>
            <ul>
                {
                    toDos.map((item)=>{
                        return(
                            <li key={item.id} id={item.id}>
                                <p>{item.text}</p>
                            </li>
                        )
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
        addToDo: text => dispatch(actionCreators.addToDo(text)),
        deleteToDo: id  => dispatch(actionCreators.deleteToDo(id))
    };
}

const Container  = styled.div`

`

export default connect(mapStateToProps, mapDispatchToProps)(Home);