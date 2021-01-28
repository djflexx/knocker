import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/Welcome'
import {AuthProvider} from './context/AuthContext'
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </AuthProvider>
    </Router>
    </div>
  )
}

export default App;
