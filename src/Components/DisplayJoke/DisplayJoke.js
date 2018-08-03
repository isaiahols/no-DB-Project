import React, { Component } from "react";

import LikeJoke from "./LikeJoke/LikeJoke";

export default class DisplayJoke extends Component {
    constructor() {
        super();

        this.state = {
            listofLikes: [],
            listofDislikes: [],
        };

        this.sortJokeLike=this.sortJokeLike.bind(this);
    }


    sortJokeLike(likeDislike){
        console.log("we are clicking "+likeDislike);
        let chosenList;
        let listName;
        // let addLocation = nowWhat?this.state.listofLikes:this.state.listofDislikes;
        if(likeDislike){
            listName="listofLikes"
            chosenList = this.state.listofLikes
        } else {
            listName="listofDislikes"
            chosenList = this.state.listofDislikes
        }
        
        this.setState({
            [listName]: [...chosenList, this.props.theJoke],
        })
    }


    render() {
        let { theJoke } = this.props
        return (
            <div>
                <p>DisplayJoke</p>
                {theJoke}
                <LikeJoke answer={this.state.answer} sorter={this.sortJokeLike}/>
                <div>This is the like list{this.state.listofLikes}</div>
                <div>This is the dislike list{this.state.listofDislikes}</div>
            </div>
        )
    }
}