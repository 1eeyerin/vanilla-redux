import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function ToDo(props){
    const {
        text,
        id,
        deleteToDo
    } = props;
    return(
        <>
            <li>
                <Link to={`/${id}`}>
                    {text}
                </Link>
                <button style={{marginLeft:'5px'}} onClick={()=>deleteToDo(id)}>DEL</button>
            </li>
        </>
    )
}

export default ToDo;