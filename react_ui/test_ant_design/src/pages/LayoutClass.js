import React, { Component } from "react";
import {
  Layout,
  Menu,
  Typography,
  Divider,
  Image,
  Row,
  Col,
  Card,
  List, 
  Avatar, 
  Empty
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
const {Text} = Typography;

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
          width={300}
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
              <Menu.Item key="1" icon={<UserOutlined />} width="100%">
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
    const data = [
      {
        name: "류이호",
        birth: "1986년 08월 12일"
      },
      {
        name: "임준걸",
        birth: "1981년 03월 27일"
      },
      {
        name: "유연석",
        birth: "1981년 03월 27일"
      },
      {
        name: "박준형",
        birth: "1970년 03월 27일"
      },
      {
        name: "제니",
        birth: "1995년 03월 27일"
      },
      {
        name: "지수",
        birth: "1993년 03월 27일"
      },
      {
        name: "아이린",
        birth: "1981년 03월 27일"
      },
    ];
    

    return (
      <>
        <Card className="Home-card">
          <List
            itemLayout="horizontal"
            locale={{
              emptyText: (
                <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                  height: 60,
                }}
                description={
                  <span>
                    데이터가 없습니다!
                  </span>
                }
                />
              )
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item style={{fontSize: "20px", marginTop:'12px'}}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="/Users/jisulee/github/React/react_ui/test_ant_design/src/pages/Grids.js" >{item.name}</a>}
                  description={<Text level={6}>{item.birth}</Text>}
                />
              </List.Item>
            )}
            
          />
        </Card>
      </>
    );
  }
}

export default LayoutClass;
