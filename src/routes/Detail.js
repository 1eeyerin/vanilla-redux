import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

function Detail(props){
    const id = useParams();
    const {
        toDo
    } = props;

    return(
        <>
            <h1>{toDo?.text}</h1>
            <h4>Created at: {toDo?.id}</h4>
        </>
    )
}

function mapStateToProps(state, ownProps){
    const {
        match:{
            params: {id}
        }
    } = ownProps;
    return {toDo:state.find(toDo => toDo.id === parseInt(id))}
}

export default connect(mapStateToProps)(Detail);