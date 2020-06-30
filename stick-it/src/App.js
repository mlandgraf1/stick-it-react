import React, { Component } from 'react';
import StickForm from './components/StickForm';
import Results from './components/Results';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Stick It</h1>
        <Navigation />
        <StickForm />
        <Results />
      </div>
    );
  }
}

export default App;
