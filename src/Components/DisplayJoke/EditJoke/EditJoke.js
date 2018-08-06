import React, { Component } from "react";


class EditJoke extends Component {
    constructor() {
        super()

        this.state={
            edit: false,
            display: 'words go here',
        }
    }


// 
// 
// 
// 
// // // // // 
//    // // // // this is me trying to make 
//    // // // // a p tag clickable and turn to
//    // // // // an input box...
// // // // //
// 
// 
// 
// 


    handleClickToEdit(){
        console.log("we are clicking on the joke now");
        
        this.setState({
            edit: true,
        })
        if(this.state.edit){
            <input type="text" value={this.state.display}/>
        } else {
            <p>{this.state.display}</p>
        }
    }


    render() {
        let {joke, update, finishEdit, updateText, text} = this.props;
        return (
            <div>
                <input type="text" value={text} onChange={(e)=>updateText(e)}/>
                <button onClick={()=>finishEdit()}>Finish Editing</button>
            </div>
        )
    }
};

export default EditJoke;