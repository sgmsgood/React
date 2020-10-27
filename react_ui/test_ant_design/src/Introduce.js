import React, { Component } from "react";
import { Typography, Divider } from "antd";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Buttons, Icon, Typo} from './pages';
const { Paragraph, Text } = Typography;

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
                    <Link to="/button">Button</Link>
                  </li>
                  <li>
                    <Link to="/icon">
                      Icon
                    </Link>
                  </li>
                  <li>
                    <Link to="/typo">Typo</Link>
                  </li>
                </ul>
              </nav>
              <Route exact path="/button" component={Buttons} />
              <Route exact path="/icon" component={Icon} />
              <Route exact path="/typo" component={Typo} />
            </div>
          </Router>
        </Paragraph>

        <Paragraph>
          Press <Text keyboard>Esc</Text> to exit...
        </Paragraph>

        <Divider />
      </Typography>
    );
  }
}

export default Introduce;
