import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
import NewGames from './NewGames';
 const word = "HELLO";
 const word1 = "CHOCOLATEY";
class App extends Component {
  render() {
    return (
    <div className="activecard">
    <WordCard value={word}/>
    <NewGames value={word1}/>
    </div>
    );
   }
   }
export default App;
