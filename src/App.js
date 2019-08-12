import Introduction from "./JS/Introduction";
import Main from "./JS/Main";
import Home from "./JS/Home";
import Portfolio from "./JS/Portfolio";
import Copyright from"./JS/Copyright";
import './App.css';
import React, { Component } from 'react'

export default class App extends Component{
    render(){
        return(
            <div id="container-wrapper">
                  <Main></Main> 
                <div id="color-main">
                    <Home></Home>
                    <Introduction></Introduction> 
                    <Portfolio></Portfolio>  
                    <Copyright></Copyright>
                </div>
            </div>
        )
    }
}
