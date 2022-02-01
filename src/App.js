// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Recipes from './Components/recipes/RecipesList'
import './App.css';

function App() {
  return (
    
      <HashRouter basename='/'>
        <div className="App">

          <Navbar />

            <Route exact path='/' component={Home} />
            <Route path="/recipes" component={Recipes} />

        </div>

      </HashRouter>
    
  );
}

export default App;
