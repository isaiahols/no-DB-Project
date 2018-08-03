import React from "react";

export default function NewJoke(props) {



    return (
        <div>
            <button onClick={props.getNewJoke}>Get New Joke</button>
        </div>
    )
}