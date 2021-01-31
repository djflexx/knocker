import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/Welcome'
import {AuthProvider} from './context/AuthContext'

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Welcome} />
        </Switch>
      </AuthProvider>
    </Router>
    </div>
  )
}

export default App;
