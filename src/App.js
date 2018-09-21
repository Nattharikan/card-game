import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
import NewGames from './NewGames';
 const word = "Hello";
 const Noona = "PSU";
class App extends Component {
  render() {
    return (
    <div className="activecard">
    <WordCard value={word}/>
    <NewGames value={Noona}/>
    </div>
    );
   }
   }
export default App;
