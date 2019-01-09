import React, { Component } from "react";
import Character from "../character.png";

class Moves extends Component {
  constructor() {
    super();
    // track the moves
    this.state = {
      move: ''
    };
  }

  

  handleKeyDown(e) {
    console.log(e.keyCode);
    const leftArrow = 37, rightArrow = 39, upArrow = 38, downArrow = 40; 
    // select Character
    const character = document.querySelector(".character");
    // get current positions
    const currBotPos = Number(character.style.bottom.slice(0, 3));
    const currRiPos = Number(character.style.right.slice(0, 3));

    // handel events and move the  !!
    if(e.keyCode === leftArrow){
      this.setState({move: 'left'})
      character.style.right = currRiPos < 700 ? currRiPos + 100 + 'px' : "750"
    } else if(e.keyCode === rightArrow){
      this.setState({move: 'right'})
      character.style.right = currRiPos > 100 ? currRiPos - 100 + 'px' : ""
    } else if(e.keyCode === upArrow){
      this.setState({move: 'up'})
      character.style.bottom = currBotPos < 300 ? currBotPos + 100 + 'px' : "350"
    } else if(e.keyCode === downArrow){
      this.setState({move: 'down'})
      character.style.bottom = currBotPos > 100 ? currBotPos - 100 + 'px' : ""
    }

  }

  
  render() {
    return (
      <div className="container">
        <div className="move-area">
          <img className="character" src={Character} />
        </div>
        <div className="moves">
          <span>Moves:{this.state.move} </span>
        </div>
        <button className="btn btn-dark"> Step Back </button>
      </div>
    );
  }
  componentWillMount() {
    document.addEventListener('keydown',this.handleKeyDown.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this))
  }
}

export default Moves;
