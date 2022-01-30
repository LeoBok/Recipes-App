import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import RecipesList from './Components/recipes/RecipesList'
import './App.css';

function App() {
  return (
    
      <Router>
        <div className="App">

          <Navbar />

          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/recipes'>
              <RecipesList />
            </Route>

          </Switch>

        </div>

      </Router>
    
  );
}

export default App;
