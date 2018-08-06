import React from 'react';

const MakeDisplayList = ({ lists, deleteJoke }) => {

    let displayMyList = lists.map(jokeObj => {

        return (
            <div key={jokeObj.id}>
                <p>{jokeObj.value}</p>
                <button onClick={()=>deleteJoke(jokeObj.id)} >Delete</button>
            </div>);
    });



    return (
        <div>{displayMyList}</div>
    )
}

export default MakeDisplayList;