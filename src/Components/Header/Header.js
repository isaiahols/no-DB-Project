import React, { Component } from "react";
import "./Header.css"

//This going to render the header
//this can be a stateless functional component if 
//I do not use an alert box to get the name of the 
//user when the component mounts and then display it
//in the header

export default class Header extends Component {

    render() {
        return (
            <div className='header' >Header</div>
        )
    }
}