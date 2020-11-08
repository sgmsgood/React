import React, { Component } from "react";
import {
  Layout,
  Menu,
  Typography,
  Divider,
  Image,
  Row,
  Col,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CustomerServiceOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "./layoutclass.css";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class LayoutClass extends Component {
  render() {
    return (
      <>
        <HeaderSlider />
      </>
    );
  }
}

class HeaderSlider extends Component {
  render() {
    return (
      <>
        <Layout>
          <SiderItem />
          <Layout>
            <HeaderItem />
            <ContentItem />
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

class HeaderItem extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <>
        <Header className="header" style={{ backgroundColor: "#FFE5E6" }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              backgroundColor: "#FFE5E6",
            }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <Menu.Item key="1">Design</Menu.Item>
            <Menu.Item key="2">Docs</Menu.Item>
            <Menu.Item key="3">Components</Menu.Item>
            <Menu.Item key="4">Resources</Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}

class SiderItem extends Component {
  render() {
    return (
      <>
        <Sider
          className="site-layout-background"
          style={{ width: "100%", borderRight: 0 }}
          width={200}
        >
            <Layout className="site-layout-background">
              <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={5} />
        
                <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            
                <Col xs={2} sm={4} md={6} lg={8} xl={5} />
              </Row>
            </Layout>
            <Divider> 관리자: 이지수</Divider>
           
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ color: "#4C9EA2", height: "100%" }}
          >
            <SubMenu key="Layout" title="Layout" icon={<LaptopOutlined />}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Divider
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Grid
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Layout
              </Menu.Item>
              <Menu.Item key="4" icon={<CustomerServiceOutlined />}>
                Space
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </>
    );
  }
}

class ContentItem extends Component {
  render() {
    return (
      <>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </>
    );
  }
}

export default LayoutClass;
