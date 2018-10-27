import React, { Component } from 'react';
import './App.css';
import Pixabay from './logo_square_pixabay.png';
import axios from 'axios'

class App extends Component {
  state = {
  };

  componentDidMount() {

    // Chuck Norris API 

    // PokeAPI 
      
    // SWAPI

    // Weather API

    // Pixabay

    // Deck of Cards API 

  }
  render() {
    return (
      <div className="App">
          <h1>DevMountain Phoenix API Challenge</h1>
          <h2>Chuck Norris API</h2>
          <p>Joke: {}</p>
          <h2>PokeAPI</h2>
          <p>Name: {}</p>
          <img src={'http://example-url.com'} alt=""/>
          <h2>SWAPI</h2>
          <p>Name: {}</p>
          <p>Species: {}</p>
          <p>Homeworld: {}</p>
          <h2>Weather API</h2>
          <p>City: {}</p>
          <p>Weather: {}</p>
          <h2>Pixabay</h2>
          <a href={'http://example-url.com'} target="_blank"><img className="pixabay_picture" src={Pixabay} alt="Pixabay Picture"/></a>
          <h2>Deck of Cards API</h2>
          <h2>Royal Flush</h2>
          <div className="royalFlush">
            <img src={'http://example-url.com'} alt="10"/>
            <img src={'http://example-url.com'} alt="Jack"/>
            <img src={'http://example-url.com'} alt="Queen"/>
            <img src={'http://example-url.com'} alt="King"/>
            <img src={'http://example-url.com'} alt="Ace"/>
          </div>
      </div>
    );
  }
}

export default App;


