import React from "react";


const EditButton = ({doThis, text}) => {
    return (
        <button onClick={() => doThis()}>{text}</button>
    )
}

export default EditButton