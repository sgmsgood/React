import React from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';



import SubMenu from 'antd/lib/menu/SubMenu';

const Navigation = () => {
    return (
        <>
            <Row>

                <Menu theme="white" mode="horizontal" style={{ textAlign: "center" }} defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >
                        <Link to="/">숙소</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/about">체험</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/adventure">온라인 체험</Link>
                    </Menu.Item>
                    <SubMenu key="SubMenu" icon={<GlobalOutlined />}>

                    </SubMenu>
                </Menu>

            </Row>
        </>
    );
}

export default Navigation;