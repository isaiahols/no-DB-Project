import React, { Component } from 'react';
import axios from "axios";

import './reset.css';
import './App.css';

import Header from "./Components/Header/Header";
import DisplayJoke from "./Components/DisplayJoke/DisplayJoke";
import NewJoke from "./Components/NewJoke/NewJoke";
import JokeList from './Components/JokeList/JokeList';
import EditButton from "./Components/DisplayJoke/EditBotton";



class App extends Component {
  constructor() {
    super()

    this.state = {
      justJoke: '',
      wholeJoke: {},
      loadOfJokes: [],
      usedIds: [],
    }
    this.getJokesfrom3rd = this.getJokesfrom3rd.bind(this);
    this.sendLikedToServer = this.sendLikedToServer.bind(this);
    this.getLikedJokes = this.getLikedJokes.bind(this);
    this.updateUsedIds = this.updateUsedIds.bind(this);
    this.editJoke = this.editJoke.bind(this);
    this.deleteJoke = this.deleteJoke.bind(this);

  }

  componentDidMount() {
    // axios
    //   .get(`https://api.chucknorris.io/jokes/random`)
    //   .then(response => {
    //     console.log(response);
    //     this.setState({
    //       justJoke: response.data.value,
    //       wholeJoke: response.data,
    //       // usedIds: [...this.state.usedIds, response.data.id],
    //     })
    // })
    this.getJokesfrom3rd();
    this.getLikedJokes();
  };

  getJokesfrom3rd() {
    axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then(response => {
        console.log(response);
        this.setState({
          justJoke: response.data.value,
          wholeJoke: response.data,
          // usedIds: [...this.state.usedIds, response.data.id],
        })
      })

  }

  updateUsedIds(jokeId) {
    this.setState({
      usedIds: jokeId,
    })
  }

  sendLikedToServer(jokeObj) {
    axios
      .post(`/api/joke/${jokeObj.id}`, jokeObj)
      .then(response => {
        console.log(response);
        this.setState({
          loadOfJokes: response.data,
        })
      })
    this.getJokesfrom3rd();
  }

  getLikedJokes() {
    axios
      .get(`/api/joke`)
      .then(response => {
        console.log(response);
        this.setState({
          loadOfJokes: response.data
        })
      })
  }

  editJoke(newText, oldJoke) {
    let newJoke = oldJoke;
    newJoke.value = newText;
    console.log(`/api/joke/${oldJoke.id}`);
    console.log("newJoke: " + JSON.stringify(newJoke));

    axios
      .put(`/api/joke/${oldJoke.id}`, newJoke)
      .then(response => {
        console.log(response.data)
        if (response.data[0]) {
          this.setState({
            justJoke: response.data[response.data.length - 1].value,
            wholeJoke: response.data[response.data.length - 1],
          })
        } else {
          this.setState({
            justJoke: response.data.value,
            wholeJoke: response.data,
          })

        }
        this.setState({
          loadOfJokes: response.data
        })
      })
  }

  deleteJoke(id) {
    axios
      .delete(`/api/joke/${id}`)
      .then(response => {
        console.log('we deleted something with id: ' + id);
        console.log(response);
        this.setState({
          loadOfJokes: response.data
        })
      })
  }


  render() {


    return (
      <div className="App">
        <Header className="header" 
        text='Create your very own Chuck Norris Joke Book with all of your favourite jokes' />
        <DisplayJoke className="displayJoke"
          theWholeJoke={this.state.wholeJoke}
          sendToServer={this.sendLikedToServer}
          theJokeText={this.state.justJoke}
          usedIds={this.state.usedIds}
          updateUsedIds={this.updateUsedIds}
          editJoke={this.editJoke}
        />
        <EditButton className="jokeButton"
          doThis={this.getJokesfrom3rd} text='Skip This joke' />
        {/* <NewJoke className="jokeButton"
          getNewJoke={this.getJokesfrom3rd} /> */}
        <JokeList className="favourites"
          likedJokeList={this.state.loadOfJokes}
          getJokeBook={this.getLikedJokes}
          deleteJoke={this.deleteJoke}
        />
        <Header text='Enjoy!' />
      </div>
    );
  }
}

export default App;
