import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={NotFound} />
      </main>
    </Router>
  )
}

export default App;
