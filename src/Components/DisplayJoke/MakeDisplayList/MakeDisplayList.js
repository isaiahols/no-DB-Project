import React from 'react';

const MakeDisplayList = ({ lists, deleteJoke, showMore }) => {

    let i = 0;
    let displayMyList = lists.map(jokeObj => {
        i++
        console.log(showMore);

        if (i < 4 && !showMore) {
            return (
                <div className='jokeBookList'
                    key={jokeObj.id}>
                    <p>{jokeObj.value}</p>
                    <button className='deleteButton' onClick={() => deleteJoke(jokeObj.id)} >Delete</button>
                </div>);
        } else if (showMore) {
            return (
                <div className='jokeBookList'
                    key={jokeObj.id}>
                    <p>{jokeObj.value}</p>
                    <button className='deleteButton' onClick={() => deleteJoke(jokeObj.id)} >Delete</button>
                </div>);
        }
    });



    return (
        <div>{displayMyList}</div>
    )
}

export default MakeDisplayList;