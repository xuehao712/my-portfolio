import React,{Component} from 'react';

export default class Expertise extends Component{

    render(){
        return(
            <div class="expertise-container section" id="jump-expertise">
                <h1>My EXPERTISE</h1>
                <div class="expertise-wrapper ">
                    <div class="expertise-1 ">
                        <span class="fa-stack fa-4x icon-1">
                            <i class="fa fa-square fa-stack-2x" aria-hidden="true" ></i>
                            <i class="fa fa-globe fa-stack-1x" ></i>
                        </span>
                        <p>I can Speak and write both in English and Mandarin. </p>
                    </div>
                    <div class="expertise-2 ">
                        <span class = "fa-stack fa-4x icon-2">
                            <i class="fa fa-square fa-stack-2x" aria-hidden="true" ></i>
                            <i class="fa fa-lightbulb-o fa-stack-1x" ></i>
                        </span>
                        <p>I have been using Html,Css,JS(React,Jquery) for building this website. Also i know a bit about Java.</p>
                    </div>
                    <div class="expertise-3 ">
                        <span class = "fa-stack fa-4x icon-3">
                            <i class="fa fa-square fa-stack-2x" aria-hidden="true" ></i>
                            <i class="fa fa-database fa-stack-1x" aria-hidden="true"></i>
                        </span>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}