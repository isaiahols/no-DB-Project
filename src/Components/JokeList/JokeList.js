import React, { Component } from "react";

import MakeList from "./MakeList/MakeList";
import MakeDisplayList from '../DisplayJoke/MakeDisplayList/MakeDisplayList'


class JokeList extends Component {
    constructor() {
        super()
        this.state = {
            showMore: false,
            num: 5,
        }
    }

    componentDidMount() {
        this.props.getJokeBook()
    }

    render() {
        const { likedJokeList, getJokeBook, deleteJoke} = this.props;
        const { showMore } = this.state;
        // let numbers=5
        // ,lists=['1'];

        // if(showMore){
        //     numbers = likedJokeList.length
        // }

        // for(let i = numbers; i>0;i--){
        //     lists.unshift(likedJokeList[i].value)
        // }

        // console.log(lists);

        // let mappedJokes= likedJokeList.map(jokeObj=>{
        //     return <div  >{jokeObj.value}</div>
        // })
        return (
            <div>
                    <MakeDisplayList lists={likedJokeList} deleteJoke={deleteJoke}/>
                    <button onClick={getJokeBook}>See All of Your Joke Book</button>
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