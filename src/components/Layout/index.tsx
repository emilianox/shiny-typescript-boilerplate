import { Breadcrumb, Icon, Layout, Menu } from 'antd';
import React from 'react';
import('./index.scss');

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class AppLayout extends React.Component {
  public state = {
    collapsed: false,
  };

  // tslint:disable-next-line: no-flag-args
  public readonly onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  }
  public readonly MenuCustom = () => (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>Option 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop" />
        <span>Option 2</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={this.user()}
      >
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={this.team()}
      >
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9">
        <Icon type="file" />
        <span>File</span>
      </Menu.Item>
    </Menu>

  )

  public render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <this.MenuCustom />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }

  private readonly team = () => (
    <span>
      <Icon type="team" />
      <span>Team</span>
    </span>
  )

  private readonly user = () => (
    <span>
      <Icon type="user" />
      <span>User</span>
    </span>
  )
}
