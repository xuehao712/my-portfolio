import React,{Component} from 'react';

export default class Portfolio extends Component{

    render(){
        return(
            <div class="portfolio-container">
                <section class="portfolio-section">
                    <h1>My Portfolio</h1>
                    <p>Click the button to see more info</p>
                </section>
                <div id="portfolio-project">
                    {/* xxx-project */}
                    <article class="portfolio-xxx">
                        <div class="portfolio-xxx-image">
                            <img id="portfolio-xxx-image-parent"src="./Image/test.png"></img>
                        </div>
                        <div class="portfolio-xxx-overlay">
                            <a href="./Image/test.png"></a>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}