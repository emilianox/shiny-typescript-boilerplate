import { Avatar, Col, Divider, Drawer, List, Row } from 'antd';
import React from 'react';

const pStyle = {
  color: 'rgba(0,0,0,0.85)',
  display: 'block',
  fontSize: 16,
  lineHeight: '24px',
  marginBottom: 16,
};

interface IDescriptionItemProps {
  title: string;
  content: string | React.ReactChild;
}

const DescriptionItem = ({ title, content }: IDescriptionItemProps) => (
  <div
    style={{
      color: 'rgba(0,0,0,0.65)',
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
    }}
  >
    <p
      style={{
        color: 'rgba(0,0,0,0.85)',
        display: 'inline-block',
        marginRight: 8,
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

export class Preview extends React.Component {
  public state = { visible: false };

  public showDrawer = () => {
    this.setState({
      visible: true,
    });
  }

  public onClose = () => {
    this.setState({
      visible: false,
    });
  }

  public render() {

    interface IItemDataSource {
      id?: string | number;
      name: React.ReactNode;
    }

    const dataSource = [
      {
        id: 'lili',
        name: 'Lily',
      },
      {
        id: 'lili',
        name: 'Lily',
      },
    ];

    const renderItem = (item: IItemDataSource) => (
      <List.Item
        key={item.id}
        actions={[
          <a onClick={this.showDrawer} key={`a-${item.id}`}>
            View Profile
          </a>,
        ]}
      >
        <List.Item.Meta
          avatar={
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          }
          title={<a href="https://ant.design/index-cn">{item.name}</a>}
          description="Progresser AFX"
        />
      </List.Item>
    );

    return (
      <div>
        <List
          dataSource={dataSource}
          bordered={true}
          renderItem={renderItem}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things:simple as possible but no simpler."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="AFX" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                // tslint:disable-next-line: max-line-length
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                }
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}
