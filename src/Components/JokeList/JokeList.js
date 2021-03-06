import React, { Component } from "react";

import MakeDisplayList from '../DisplayJoke/MakeDisplayList/MakeDisplayList';
import EditButton from "../DisplayJoke/EditBotton";



class JokeList extends Component {
    constructor() {
        super()
        this.state = {
            showMore: false,
            num: 5,
        }
        this.handleMoreClick = this.handleMoreClick.bind(this);
    }

    componentDidMount() {
        // this.props.getJokeBook()
    }

    handleMoreClick() {
        this.setState({
            showMore: !this.state.showMore
        });
        this.props.getJokeBook()
    }

    render() {
        const { likedJokeList, deleteJoke } = this.props;
        const { showMore } = this.state;

        return (
            <div className='likedList' >
                <MakeDisplayList lists={likedJokeList} deleteJoke={deleteJoke} showMore={showMore} />
                <br />
                {likedJokeList.length>3&&
                    <EditButton className='showMoreButton' doThis={this.handleMoreClick} text={!showMore?'See All of Your Joke Book':'Only Show Most Recent Jokes'} />}
            </div>
        )
    }
};

export default JokeList;