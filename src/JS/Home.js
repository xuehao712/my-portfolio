import React,{Component} from 'react';


export default class Home extends Component{

    render(){
        return(
            <div class="home-container section" id="jump-home">
                
                    {/* <div class="hide-sidebar" >
                        <div id='togglebutton-sidebar' >
                            <div class="hide-sidebar1"></div>
                            <div class="hide-sidebar2"></div>
                            <div class="hide-sidebar3"></div>
                        </div>
                    </div>  */}
                     <div class="video-wrapper">
                        <video preload="auto" loop muted autoPlay>
                            <source src="./Video/Raindrop.mp4" type='video/mp4'/>
                            <source src="./Video/Raindrop.webm" type='video/webm'/>
                        </video>
                        <div class="video-overlay" style={{backgroundColor: 'rgba(0,0,0,0.45)'}}></div>
                    </div>  
                    <div class="home-wrapper" >
                        <div class="animated fadeInUp " id="typed-strings">
                            <p>Welcome to My Page.</p>
                            <p>Thank You for Showing up!</p>
                            <p>Within you can find more information about me.</p>
                            <p>I hope you can reach me!</p>
                        </div>  
                        <span id="typed" ></span>
                    </div>
                    
            </div>    
        )
    }
}
