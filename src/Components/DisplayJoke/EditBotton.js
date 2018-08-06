import React from "react";


const EditButton = ({startEdit}) => {
    return (
        <button onClick={() => startEdit()}>Edit</button>
    )
}

export default EditButton