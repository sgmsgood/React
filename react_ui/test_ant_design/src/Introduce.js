import React, { Component } from "react";
import { Typography, Divider } from "antd";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Buttons, Icons, Typo} from './pages';
const { Paragraph, Title } = Typography;

class Introduce extends Component {
  render() {
    return (
      <Typography>
        <Paragraph>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/button">Buttons</Link>
                  </li>
                  <li>
                    <Link to="/icon">
                      Icons
                    </Link>
                  </li>
                  <li>
                    <Link to="/typo">Typo</Link>
                  </li>
                </ul>
              </nav>
              <Route exact path="/button" component={Buttons} />
              <Route exact path="/icon" component={Icons} />
              <Route exact path="/typo" component={Typo} />
            </div>
          </Router>
        </Paragraph>
        <Divider orientation="center">
          <Title>The End</Title>
          </Divider>
      </Typography>
    );
  }
}

export default Introduce;
