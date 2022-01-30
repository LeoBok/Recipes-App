import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    
      <Router>
        <div className="App">

          <Navbar />

          <Switch>

            <Route exact path='/'>
              <Main />
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
