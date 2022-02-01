// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Component } from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Recipes from './Components/recipes/RecipesList'
import './App.css';

function App() {
  return (
    
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/recipes" component={Recipes} />
          </Switch>
          
        </div>

      </Router>
    
  );
}

export default App;
