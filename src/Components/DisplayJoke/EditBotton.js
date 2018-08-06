import React from "react";


const EditButton = ({doThis, text, cN}) => {
    return (
        <button 
        className={cN}
        onClick={() => doThis()}
        >{text}</button>
    )
}

export default EditButton