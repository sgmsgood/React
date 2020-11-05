import React, { Component } from "react";
import { Button, Tooltip, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { PoweroffOutlined, InstagramOutlined, QuestionCircleOutlined, BellOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

class Buttons extends Component {
  handleButtonEvent = (e) => {
    this.setState((state) => {
      console.log("So It Be");
    });
  };

  render() {
    return (
      <>
        <h3>1. Button</h3>
        <DefaultButton></DefaultButton>
        <br/>
        <h3>2. Tooltip</h3>
        <TooltipButton></TooltipButton>
        <br/> 
        <h3>3. Loading</h3>
        <LoadingButton></LoadingButton>
      </>
    );
  }
}

class DefaultButton extends Component {
  render() {
    return (
      <Space>
        <Button
          type="primary"
          style={{
            color: "#f7f81a",
            backgroundColor: "#d7a5ca",
            borderColor: "transparent",
          }}
          onClick={this.handleButtonEvent}
        >
          <InstagramOutlined />
          So It Be
        </Button>
        <Button shape="round" size="small">round Button</Button>
        <Button type="dashed" size="large">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Tooltip title="Goast Button" color="#6ca7ae" >
          <Button ghost>Link Button</Button>
        </Tooltip>
        <Button type="primary" shape="circle">
            A
        </Button>

        <Button disabled="false">non clickable</Button>
        <Button disabled="false" loading>non clickable Loding</Button>
        <Button disabled="false" loading={10}>non clickable Loding</Button>
      </Space>
    );
  }
}

class TooltipButton extends Component {
  render() {
    return (
      <>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Tooltip title="RoundButton 예뻐요!" color="#6ca7ae" >
        <Button type="primary" shape="Round Button">
          A
        </Button>
        </Tooltip>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
      </>
    );
  }
}

class LoadingButton extends Component {
  state = {
    loadings: [],
  };

  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });

    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };
  render() {
    const { loadings } = this.state;

    return (
      <>
        <Space>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>
        <br/>
        <Space>
          <Button
            type="dashed"
            loading={loadings[0]}
            icon={<QuestionCircleOutlined />}
            onClick={() => this.enterLoading(0)}
          >
            Question Box
          </Button>
        
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[5]}
          onClick={() => this.enterLoading(5)}
        >
          Click me!
        </Button>

        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
        </Space>
      </>
    );
  }
}

export default Buttons;
