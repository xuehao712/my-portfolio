import React,{Component} from 'react';


export default class Main extends Component{
 
    render(){
        return(
            /* main wrapper*/
            <div class="main-container" >
                <div class="side-bar">
                    <img src="./Image/selfie.png"   alt="Myself" class="self-image" ></img> 
                    <p id="name">Xuehao Zheng</p>
                    {/*contact info wrapper */}
                    <span class="contact-wrapper" >
                        <div class="email-wrapper"><i class="fa fa-envelope " aria-hidden="true" >xuehao712@gmail.com</i></div>
                        <div class="mobile-wrapper"><i class="fa fa-mobile  " aria-hidden="true" >1-917-302-2873</i></div>
                    </span>                   
                    {/*header and wrapper for menu*/ } 
                    <header class="header-container">
                        <div class = "header-wrapper">
                            <nav class ="primary-menu">
                                <ul>
                                    <li ><a href="#jump-home">Home</a></li>  
                                    <li><a href="#jump-introduction">Introduction</a></li> 
                                    <li><a href="#jump-expertise">Portfolio</a></li>                    
                                </ul>
                            </nav>
                        </div>
                    </header>
                    {/*github and linked wrapper */}
                    <a href="https://github.com/xuehao712" target="_blank" rel="noopener noreferrer" class="github-container" >
                        <span class="fa-stack fa-lg" id="github-wrapper">
                            <i class="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
                            <i class="fa fa-github fa-stack-1x"></i>
                        </span>
                    </a>
                    <br></br>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="linkedin-container">
                        <span class="fa-stack fa-lg" id="linkedin-wrapper">
                            <i class="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
                            <i class="fa fa-linkedin fa-stack-1x"></i>
                        </span>
                    </a>
                    <div class="copyright-wrapper">
                        <p >Copyrights © 2019 All Rights Reserved by Xuehao Zheng.</p>
                    </div>
                    
                </div>
            </div>          
        )
    }

}