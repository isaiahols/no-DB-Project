import React from "react";


const EditButton = ({doThis, text}) => {
    return (
        <button 
        className='editButton'
        onClick={() => doThis()}
        >{text}</button>
    )
}

export default EditButton