import React from "react";


export default function LikeJoke(props) {

    return (
        <div className='likeButtons' >
            <button
                className='addToJokeBook'
                onClick={() => props.sorter(true)}
            >Add To Joke Book</button>
            <button
                className='dontAddToJokeBook'
                onClick={() => props.sorter(false)}
            >Do Not Add to Joke Book</button>
        </div>
    )
};
