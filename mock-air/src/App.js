import './App.css';
import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import Home from "./Home"
import About from "./About";

function App() {
  return (
    <Router>
      <Layout>
      <header>
        <Menu theme="white" mode="horizontal" className="center-horizontal">
          <Menu.Item key="/">
            <Link to ="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to ="/about">About</Link>
          </Menu.Item>
        </Menu>
      </header>
      </Layout>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
