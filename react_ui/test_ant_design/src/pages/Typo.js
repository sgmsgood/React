import React, { Component } from "react";
import { Typography, Divider } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

class Typo extends Component {
  render() {
    return (
      <Typography>
        <Title>Introduction</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
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
        <Title level={2}>JJ Lin 14th Album</Title>

        <Paragraph>
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

        <Paragraph>
          Press <Text keyboard>Esc</Text> to exit...
        </Paragraph>

        <Divider />
      </Typography>
    );
  }
}

export default Typo;