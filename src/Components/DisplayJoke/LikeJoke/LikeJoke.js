import React from "react";


export default function LikeJoke(props) {

    return (
        <div>
            <button onClick={() => props.sorter(true)}>Like</button>
            <button onClick={() => props.sorter(false)} >Dislike</button>

        </div>
    )
};
