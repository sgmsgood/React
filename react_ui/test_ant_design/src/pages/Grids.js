import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from 'antd';

const blueStyle = { background: '#0092ff', padding: '8px 0' };
const redStyle = { background: '#9e5757', padding: '8px 200px' };
const coralStyle = { background: '#f26f6c', padding: '8px 0' };

class Grids extends Component {
    render() {
        return (
            <>
                <BasicGrid></BasicGrid>
                
            </>
        );
    }
}

class BasicGrid extends Component {

    render() {
        return (
            <>
                <Row>
                    <Col span={24} style={blueStyle}>col</Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12} >
                        <div style={redStyle}>col-12</div>
                    </Col>
                    <Col className="gutter-row" span={12} >
                        <div style={coralStyle}>col-12</div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
                <Divider orientation="left">Responsive</Divider>
                <Row gutter={{ xs: 100, sm: 20, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6} push={5} order={2}>
                        <div style={blueStyle}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6} order={1}>
                        <div style={blueStyle}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6} order={3}>
                        <div style={blueStyle}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6} order={4}>
                        <div style={blueStyle}>col-6</div>
                    </Col>
                </Row>    
            </>
        );
    }
}

export default Grids;
