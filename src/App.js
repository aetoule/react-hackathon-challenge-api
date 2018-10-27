import React, { Component } from 'react';
import './App.css';
import Pixabay from './logo_square_pixabay.png';
import axios from 'axios'

class App extends Component {
  state = {
    chuck: '',
    poke: '',
    sw: '',
    swspecies: ''
  };

  componentDidMount() {

    // Chuck Norris API 
    axios.get('https://api.chucknorris.io/jokes/random').then(res => {
      this.setState({
        chuck: res.data.value
      })
    })
    // PokeAPI 
      axios.get('http://pokeapi.co/api/v2/').then(res => {
        console.log('hi')
        console.log(res.data)
        this.setState({
          poke: res.data.forms[0].name
        })
      })
    // SWAPI
    axios.get('https://swapi.co/api/people/1').then(res => {
      this.setState({
        sw: res.data.name,
        swspecies: res.data.species[0]
      })
    })
    // Weather API

    // Pixabay

    // Deck of Cards API 

  }
  render() {
    return (
      <div className="App">
          <h1>DevMountain Phoenix API Challenge</h1>
          <h2>Chuck Norris API</h2>
          <p>Joke: {this.state.chuck}</p>
          <h2>PokeAPI</h2>
          <p>Name: {this.state.poke}</p>
          <img src={'http://example-url.com'} alt=""/>
          <h2>SWAPI</h2>
          <p>Name: {this.state.sw}</p>
          <p>Species: {this.state.swspecies}</p>
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


