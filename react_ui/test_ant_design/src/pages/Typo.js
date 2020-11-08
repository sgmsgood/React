import React, { Component, useState } from "react";
import { Typography, Divider, Slider, Space, Tooltip} from "antd";

const { Title, Paragraph, Text, Link } = Typography;

class Typo extends Component {
  render() {
    return (
      <Typography>
        <Title>Introduction</Title>
        <Paragraph>
          After massive project practice and summaries, Ant Design, a design
          language for background applications, is refined by Ant UED Team,
          which aims to
          <Text strong>
            uniform the user interface specs for internal background projects,
            lower the unnecessary cost of design differences and implementation
            and liberate the resources of design and front-end development
          </Text>
          .
        </Paragraph>
      
        <Title level={2}>JJ Lin</Title>
        <Title level={3}>--DRIFER--</Title>

        <Paragraph delete>
          We supply a series of design principles, practical patterns and high
          quality design resources (<Text code>Sketch</Text> and{" "}
          <Text code>Axure</Text>), to help people create their product
          prototypes beautifully and efficiently.
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <Link href="https://www.youtube.com/watch?v=hVnbXhQVY2k">Embark</Link>
            </li>
            <li>
              <Link href="https://youtu.be/HARhtTMmdtc">Passing Through</Link>
            </li>
            <li>
              <Link href="https://youtu.be/8HN9xEd6dzE">So Be It</Link>
            </li>
          </ul>
        </Paragraph>
        <TextType/>
        <Suffix/>
        <Divider />
      </Typography>
    );
  }
}

class TextType extends Component {
  render() {
    return(
      <Space direction="vertical">
        <Text>Ant Design (default)</Text>
        <Text type="secondary" >Ant Design (secondary)</Text>
        <Text type="success">Ant Design (success)</Text>
        <Text type="warning">Ant Design (warning)</Text>
        <Text type="danger">Ant Design (danger)</Text>
        <Text disabled>Ant Design (disabled)</Text>
        <Text mark>Ant Design (mark)</Text>
        <Text code>Ant Design (code)</Text>
        <Text keyboard>Ant Design (keyboard)</Text>
        <Text underline>Ant Design (underline)</Text>
        <Text delete type="danger">Ant Design (delete)</Text>
        <Text strong copyable={true}>Ant Design (strong)</Text>
        <Link href="https://naver.com" target="_blank">
          Ant Design (Link)
        </Link>
      </Space>       
    );
  }
}

class Interactive extends Component {
  render() {
    const Demo = () => {
      const [editableStr, setEditableStr] = useState('This is an editable text.');
    }
    return(
      <>
        <Demo>
          <Paragraph editable={{ onChange: this.setEditableStr }}>{this.editableStr}</Paragraph>
        </Demo>
      </>
    );
  }
}

class Suffix extends Component {
  state = {
    rows: 2,
  };

  onChange = rows => {
    this.setState({rows});
  };

  render() {
    const {rows} = this.state;
    const article = "자유로운 삶을 꿈꾸는 칠월과 안정적인 삶을 추구하는 안생, 서로가 각별하지만 너무나도 다른 두 친구는 스무살이 된 해 사소한 오해를 안고 이별한다. 멀어진 채 어른이 된 둘은 서로 타지에서 각자 자신이 원하던 삶을 살아간다. 너무 좋아하는 주동우 배우의 주연작. 절대 여자 둘이 남자때문에 우정깨지고 싸우는 영화 아닙니다. 원제는 칠월과 안생 七月和安生, 주인공 두 명의 이름이지요. 이 영화는 두 사람의 우정이야기입니다. 서로 비슷한점이라고는 없지만 어린시절부터 절친한 친구였던 칠월과 안생. 서로가 상대를 가장 사랑한다 자신했지만 사소한 오해로 안생은 칠월을 의심하고, 칠월은 안생에게 자신이 불편한 존재가 되었다는걸 알고 타지로 떠나려합니다. 칠월이 떠나는날, 칠월은 안생에게 네가 나를 붙잡는다면 떠나지 않겠다고 하지만 안생은 결국 칠월을 붙잡지 않아요. 친구에게 사사로운 감정이 쌓여 마음이 울컥했던 경험들 다들 가지고 있지 않나요? 저도 성인이 되며 친구관계에 대해 많이 생각해본 사람으로서, 서로에게서 멀어져 다른 삶을 사는 두 사람의 모습에 공감이 많이 되었습니다. 과연 이 두사람은 어떤 삶을 살게 될까요.";
    return (
      <>
        <Slider value={rows} min={1} max={5} onChange={this.onChange} />
        <Paragraph
          ellipsis={{
            rows,
            expandable: true,
            suffix: '--안녕, 나의 소울메이트',
            onEllipsis: ellipsis => {
              console.log('Ellipsis changed:', ellipsis);
            },
          }}
          title={`${article}`}
        >
          {article}
        </Paragraph>
      </>
    );
  }
}

export default Typo;