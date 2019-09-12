import Introduction from "./JS/Introduction";
import Main from "./JS/Main";
import Home from "./JS/Home";
import Expertise from "./JS/Expertise";


import './App.css';
import React, { Component } from 'react'



export default class App extends Component{
    render(){
        return(
            <div class="container-wrapper">
                    <Main></Main> 
                    <Home></Home>
                    <Introduction></Introduction> 
                    <Expertise></Expertise>       
            </div>
        )
    }
}
