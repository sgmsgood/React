import React, { Component } from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { PoweroffOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

class Buttons extends Component {
  state = {
    loadings: [],
  };

  enterLoading = index => {
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
      <h3>1. Button</h3>
        <Button type="primary">Primary Button</Button>
        &nbsp; &nbsp;
        <Button>Default Button</Button>
        &nbsp; &nbsp;
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      <br/>
      <br/>
      <h3>2. Tooltip</h3>
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
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
      <br/>
      <br/>
      <h3>3. Loading</h3>
      <Button type="primary" loading>
          Loading
        </Button>
        &nbsp; &nbsp;
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        &nbsp; &nbsp;
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        &nbsp; &nbsp;
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        &nbsp; &nbsp;
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
    </>
    );
  }
}

export default Buttons;
