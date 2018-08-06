import React, { Component } from "react";

import MakeList from "./MakeList/MakeList";
import MakeDisplayList from '../DisplayJoke/MakeDisplayList/MakeDisplayList';
import EditButton from "../DisplayJoke/EditBotton";

import './JokeList.css'


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
        const { likedJokeList, getJokeBook, deleteJoke } = this.props;
        const { showMore } = this.state;

        return (
            <div className='likedList' >
                <MakeDisplayList lists={likedJokeList} deleteJoke={deleteJoke} showMore={showMore} />
                <br />
                {/* <button className='showMoreButton' onClick={() => this.handleMoreClick()}>See All of Your Joke Book</button> */}
                <EditButton className='showMoreButton' doThis={this.handleMoreClick} text='See All of Your Joke Book' />
                {/* <div>
                    {showMore ? (
                        <button onClick={getJokeBook}>See All of Your Joke Book</button>
                        
                    ) : (
                        <div>
                            <p>this is your joke list</p>
                        </div>
        )}
                    </div> */}
            </div>
        )
    }
};

export default JokeList;