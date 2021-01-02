// your Bomb code here!

// import React, { Component } from 'react';
import React from 'react';

class Bomb extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            secondsLeft: props.initialCount
        }
    }



    render() {
        if(this.props.initialCount === 0) {
            return(<div>Boom!</div>)
        } else {

            return(
                <div>{this.props.initialCount} seconds left before I go boom!</div>
            )
        }

    }
}

export default Bomb;