import React, { Component } from 'react';
import axios from "axios";

import './reset.css'
import './App.css';

import Header from "./Components/Header/Header";
import DisplayJoke from "./Components/DisplayJoke/DisplayJoke";
import EditJoke from "./Components/EditJoke/EditJoke";
import NewJoke from "./Components/NewJoke/NewJoke";
import JokeList from './Components/JokeList/JokeList';


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      justJoke: '',
      wholeJoke: {},
      loadOfJokes: {},
    }
    this.getJokesfrom3rd = this.getJokesfrom3rd.bind(this);
    this.getNewJokeServer = this.getNewJokeServer.bind(this);
  }
  
  componentDidMount() {
    // axios
    //   .get(`https://api.chucknorris.io/jokes/random`)
    //   .then(response=>{
    //     console.log(response);
        
    //   })
  }
  
  getJokesfrom3rd() {
    axios
      .then(response => {
        console.log(response);
        this.setState({
          justJoke: response.data.value,
          wholeJoke: response.data,
        })
      })
  }

  getNewJokeServer(){
    axios
      .get(`/api/joke`)
      .then(response=>{
        console.log(response);
        console.log(response.data.value);
        this.setState({
          justJoke: response.data.value,
          wholeJoke: response.data,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayJoke theJoke={this.state.justJoke} />
        <EditJoke />
        <NewJoke getNewJoke={this.getNewJokeServer} />
        <JokeList />
      </div>
    );
  }
}

export default App;
