// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super()

    this.state = {
      //define initial state with a key of 'someKey' set to the 'someValue' prop
      secondsLeft: props.initialCount
    }
  }

  render() {
    const msg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
      // curly brackets needed to interpolate
      <div>{msg}</div>
    )
  }
}