import React, { Component } from "react";

import LikeJoke from "./LikeJoke/LikeJoke";
import MakeDisplayList from './MakeDisplayList/MakeDisplayList';
import EditJoke from "./EditJoke/EditJoke";
import EditButton from "./EditBotton";

export default class DisplayJoke extends Component {
    constructor() {
        super();

        this.state = {
            listofLikes: [],
            editing: false,
            text: '',
            EditingJoke: {},
        };

        this.sortJokeLike = this.sortJokeLike.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.updateText = this.updateText.bind(this);
        this.startEdit = this.startEdit.bind(this);
    }


    sortJokeLike(likeDislike) {
        const { usedIds, theWholeJoke, sendToServer, updateUsedIds } = this.props;
        console.log(theWholeJoke.id);
        console.log(usedIds);

        // let checking = usedIds.find(id => id === theWholeJoke.id)

        let checking = false;

        if (!checking && likeDislike) {
            sendToServer(theWholeJoke);
            updateUsedIds(theWholeJoke.id)
            console.log("liked it I guess and sent it to the server");

            // if(this.state.listofLikes.length<5){

            // }

        } else if (!checking) {
            console.log('we didnt like it');
            updateUsedIds(theWholeJoke.id)

        } else {

            console.log('we have a duplicate');
        }

    }

    finishEdit() {
        this.setState({
            editing: false,
        })
        this.props.editJoke(this.state.text,this.props.theWholeJoke)
    }

    updateText(e) {
        this.setState({
            text: e.target.value
        })
    }

    startEdit() {
        this.setState({
            text: this.props.theWholeJoke.value,
            editing: !this.state.editing,
            EditingJoke: this.props.theWholeJoke,
        })
    }

    render() {
        let { theWholeJoke, editJoke } = this.props;
        let { editing, text } = this.state;
        
        return (
            <div>
                <div>
                    {editing ? (
                        <EditJoke
                            joke={theWholeJoke}
                            update={editJoke}
                            finishEdit={this.finishEdit}
                            updateText={this.updateText}
                            text={text}
                        />) : (
                        <div>

                            <span>{theWholeJoke.value}</span>
                            <EditButton startEdit={this.startEdit} />
                        </div>
                        )}
                </div>
                <LikeJoke sorter={this.sortJokeLike} />
            </div>
        )
    }
}

{/* <div className="Post__content">
    {// This has been pulled off of this.state via destructuring
        editing ? (
            <Edit
                text={text}
                id={id}
                hideEdit={this.hideEdit}
                updatePostFn={updatePostFn}
            />
        ) : (
                <span className="Post__text">{text}</span>
            )}
</div> */}