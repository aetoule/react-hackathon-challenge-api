import React, { Component } from 'react';
import './App.css';
import Pixabay from './logo_square_pixabay.png';
import axios from 'axios'

class App extends Component {
  state = {
    chuck: '',
    poke: '',
    sw: '',
    swspecies: '',
    swhome: '',
    city: '',
    desc: '',
    jelly: ''
  };

  componentDidMount() {

    // Chuck Norris API 
    axios.get('https://api.chucknorris.io/jokes/random').then(res => {
      this.setState({
        chuck: res.data.value
      })
    })
    // PokeAPI 
      axios.get('https://pokeapi.salestock.net/api/v2/pokemon/25').then(res => {
        console.log('hi')
        console.log(res.data)
        this.setState({
          poke: res.data.forms[0].name
        })
      })
    // SWAPI
    axios.get('https://swapi.co/api/people/?page=2')
    .then(res => {
      console.log('hi', res.data)
      this.setState({
        sw: res.data.results[2].name,
      })
    })
    axios.get('https://swapi.co/api/species/').then(res => {
      this.setState({
        swspecies: res.data.name
      })
    })
    axios.get('https://swapi.co/api/planets/1/').then(res => {
      this.setState({
        swhome: res.data.name
      })
    })
    // Weather API
    
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Phoenix,usa?id=524901&APPID=58e914d0cca6e32900f55d445991e346').then(res => {
      this.setState({
        city:'Phoenix',
        desc: res.data.weather[0].description
      })
    })

    // Pixabay
    axios.get('https://pixabay.com/api/videos/?key=10494418-356403dc28f38679788247994&q=jellyfish').then(res => {
      console.log('hey',res.data.hits[0].videos.medium.url)
      this.setState({
        jelly: res.data.hits[0].videos.tiny.url
      })
    })

    // Deck of Cards API 
    axios.get('https://deckofcardsapi.com/api/eko0314b9a1j/new/draw/?count=2').then(res => {
      console.log('deck', res.data)
      this.setState({
        deck: ''
      })
    })

  }
  render() {
    return (
      <div className="App">
          <h1>DevMountain Phoenix API Challenge</h1>
          <h2>Chuck Norris API</h2>
          <p>Joke: {this.state.chuck}</p>
          {/* <h2>PokeAPI</h2>
          <p>Name: {this.state.poke}</p>
          <img src={'http://example-url.com'} alt=""/> */}
          <h2>SWAPI</h2>
          <p>Name: {this.state.sw}</p>
          <p>Species: {this.state.swspecies}</p>
          <p>Homeworld: {this.state.swhome}</p>
          <h2>Weather API</h2>
          <p>City: {this.state.city}</p>
          <p>Weather: {this.state.desc}</p>
          <h2>Pixabay</h2>
          {/* <a href={this.state.jelly} target="_blank"><img className="pixabay_picture" src={this.state.jelly} alt="Pixabay Picture"/></a> */}
          <video id="background-video" loop autoplay>
            <source src={this.state.jelly} type="video/mp4" />
    Your browser does not support the video tag.
</video>
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


