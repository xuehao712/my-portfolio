import React,{Component} from "react";

export default class Introduction extends Component{
      constructor(props){
      super(props);
      this.changeButton=this.changeButton.bind();
  }
  changeButton(e){
    e.classList.toggle("change-Button");
}
    render(){
        return(
            <div class="introduction-container">
                <p >About Me</p>
                <div class="introduction-wrapper">
                <div class="hide-sidebar" onClick={this.changeButton}>
                    <div class="hide-sidebar1"></div>
                    <div class="hide-sidebar2"></div>
                    <div class="hide-sidebar3"></div>
                </div>
                </div>
            </div>
        )
    }
}