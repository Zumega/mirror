import React, { Component } from 'react';
import './App.css';
import Weather from './components/weather/Weather';
import Quote from './components/quote/Quote';
import Pokemon from './components/pokemon/Pokemon';
import TheBar from './components/theBar/TheBar';
import Info from './components/info/Info';

class App extends Component {
  render() {
    return (
        <div className="clearfix">
            <Weather />
            <Quote />
            <Pokemon />
            <TheBar />
            <Info />
        </div>
      );
  }
}

export default App;
