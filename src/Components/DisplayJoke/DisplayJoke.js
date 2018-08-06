import React, { Component } from "react";

import LikeJoke from "./LikeJoke/LikeJoke";
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
        const { usedIds, theWholeJoke, sendToServer, updateUsedIds, getNewJoke } = this.props;
        console.log(theWholeJoke.id);
        console.log(usedIds);

        if (likeDislike) {
            sendToServer(theWholeJoke);
            updateUsedIds(theWholeJoke.id)
            console.log("liked it I guess and sent it to the server");
        } else {
            console.log('we didnt like it');
            updateUsedIds(theWholeJoke.id)
            getNewJoke()
        }

    }

    finishEdit() {
        this.setState({
            editing: false,
        })
        this.props.editJoke(this.state.text, this.props.theWholeJoke)
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
            <div className='displayJoke' >
                <div className='newJoke'>
                    {editing ? (
                        <EditJoke
                            joke={theWholeJoke}
                            update={editJoke}
                            finishEdit={this.finishEdit}
                            updateText={this.updateText}
                            text={text}
                        />) : (
                            <div className='normalJokeDisplay'>

                                <span>{theWholeJoke.value}</span>
                                <EditButton
                                    doThis={this.startEdit}
                                    text='Edit' />
                            </div>
                        )}
                </div>
                <LikeJoke
                    sorter={this.sortJokeLike} />
            </div>
        )
    }
}