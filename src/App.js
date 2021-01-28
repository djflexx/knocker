import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/Welcome'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
           <Welcome />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
