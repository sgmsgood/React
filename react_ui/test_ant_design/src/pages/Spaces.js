import React, { Component } from "react";
import './space.css';
import { Space, Card, Typography, Divider } from "antd";

const {Text} = Typography;

class Spaces extends Component {
  render() {
    return (
      <>
        <Space direction="horizontal" align="center" split={<Divider type="vertical" style={{height:180}}/>}>
          <Card title="1st Album" size="default" style={{ width: 300 }}>
            <Text type="danger">凍結(Freeze)</Text>
            <br/>
            <Text type>就是我（I'm The One）</Text>
          </Card>
          <Card title="2nd Album" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Space>
      </>
    );
  }
}

export default Spaces;
