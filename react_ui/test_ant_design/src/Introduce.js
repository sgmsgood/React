import React, { Component } from "react";
import { Typography, Divider } from "antd";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Buttons, Icons, Typo, Spaces, Grids, LayoutClass} from './pages';

const { Paragraph, Text, Title } = Typography;

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
                    <Link to="/icons">
                      Icons
                    </Link>
                  </li>
                  <li>
                    <Link to="/typo">Typo</Link>
                  </li>
                  <li>
                    <Link to="/space">Spaces</Link>
                  </li>
                  <li>
                    <Link to="/grid">Grids</Link>
                  </li>
                  <li>
                    <Link to="/layout_slider">LayoutSlider</Link>
                  </li>
                </ul>
              </nav>
              <Route exact path="/button" component={Buttons} />
              <Route exact path="/icon" component={Icons} />
              <Route exact path="/typo" component={Typo} />
              <Route exact path="/space" component={Spaces} />
              <Route exact path="/grid" component={Grids} />
              <Route exact path="/layout_slider" component={LayoutClass} />
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
