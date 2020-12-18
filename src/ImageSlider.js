// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
  constructor() {
    // calls on Super because will calls the constructor of its parent class required when you need to access some variables from the parent class. In React, when you call super with props. React will make props available across the component through this.props
    super()
// Set the default state value
    this.state = {
      
      currentSlideIndex: 0
    }
  }
  
  render() {
    return (
      // returns this. currentSlideIndex in html format with string interpolation
      <h1>I am on slide {this.state.currentSlideIndex}</h1>
    )
  }
}