import './App.css';
import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

import Home from "./Home"
import About from "./About";
import adventure from "./Adventure"
import Adventure from './Adventure';

function App() {
  return (
    <Router>
      <Layout>
      <header className="center-horizontal" >
        <Menu theme="white" mode="horizontal" style={{textAlign: "center"}} defaultSelectedKeys={['1']}>
          <Menu.Item key="1" >
            <Link to ="/">숙소</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to ="/about">체험</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to ="/adventure">온라인 체험</Link>
          </Menu.Item>
        </Menu>
      </header>
      </Layout>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/adventure" component={Adventure} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
