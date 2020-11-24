import './App.css';
import React from "react";

import 'antd/dist/antd.css';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from "./pages/Home";
import About from "./pages/About";
import Adventure from './pages/Adventure';


const App = () => {
  return (
    <HashRouter>
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/adventure" component={Adventure} />
    </HashRouter>
  );
}

export default App;
