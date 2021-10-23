
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { HomeComponent } from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "">
           <HomeComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
