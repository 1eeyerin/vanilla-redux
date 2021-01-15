import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import {Provider} from "react-redux";
import store from "../store";

function App(props){
    const {} = props;
    
    return(
        <Provider store={store}>
            <Router>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/:id"} component={Detail}/>
            </Router>
        </Provider>
    )
}

export default App;