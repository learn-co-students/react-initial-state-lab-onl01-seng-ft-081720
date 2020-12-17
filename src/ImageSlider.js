import React, { Component } from 'react';
class ImageSlide extends React.Component{
    constructor(props){
    super()
    this.state={
       currentSlideIndex:0
    }
    }
 render(){
     return(
         <p>I am on {this.state.currentSlideIndex}</p>  
      )
    }
}

export default ImageSlide