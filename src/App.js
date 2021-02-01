import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/Welcome'
import {AuthProvider} from './context/AuthContext'
import {GamesProvider} from './context/GameContext';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';


function App() {
  
  return (
    <div className="App">
    <Router>
      <AuthProvider>
      <GamesProvider>
        <Switch>
              <Route exact path="/" component={Welcome} />
              <PrivateRoute exact path="/home" component={Home}/>
        </Switch>
      </GamesProvider>
      </AuthProvider>
    </Router>
    </div>
  )
}

export default App;
