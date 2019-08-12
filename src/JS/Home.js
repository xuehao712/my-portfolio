import React,{Component} from 'react';

export default class Home extends Component{
    render(){
        return(
            <div class="home-container">
                 <div class="video-wrapper">
                    <video preload="auto" loop muted autoPlay>
                        <source src="./Video/Raindrop.mp4" type='video/mp4'/>
                        <source src="./Video/Raindrop.webm" type='video/webm'/>
                    </video>
                    <div class="video-overlay" style={{backgroundColor: 'rgba(0,0,0,0.45)'}}></div>
                </div>
                <div class="home-wrapper">
                    <p>Welcome to My Page</p>
                    <p>Thank You for Showing up!</p>
                    <p>Within you can find more information about me</p>   
                </div>
               
            </div>
        )
    }
}