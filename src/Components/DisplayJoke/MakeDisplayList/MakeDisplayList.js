import React from 'react';

const MakeDisplayList = ({ lists, deleteJoke, showMore }) => {

    let i = 0;
    let displayMyList = lists.map(jokeObj => {
        i++
        console.log(showMore);

        if (i < 6 && !showMore) {
            return (
                <div key={jokeObj.id}>
                    <p>{jokeObj.value}</p>
                    <button onClick={() => deleteJoke(jokeObj.id)} >Delete</button>
                </div>);
        } else if (showMore) {
            return (
                <div key={jokeObj.id}>
                    <p>{jokeObj.value}</p>
                    <button onClick={() => deleteJoke(jokeObj.id)} >Delete</button>
                </div>);
        }
    });



    return (
        <div>{displayMyList}</div>
    )
}

export default MakeDisplayList;