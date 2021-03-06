import { Link, navigate } from '@reach/router';
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

  public readonly navigateHome = () => navigate('/');

  public readonly MenuCustom = () => (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" onClick={this.navigateHome}>
        <Icon type="home" />
        <span>Home</span>
      </Menu.Item>

      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="book" />
            <span>Libraries</span>
          </span>

        }
      >
        <Menu.Item key="3">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="preview">Antd Widgets</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="form">Formik</Link>
        </Menu.Item>
        <Menu.Item key="lodash">
          <Link to="lodash">Lodash</Link>
        </Menu.Item>
        <Menu.Item key="momentjs">
          <Link to="momentjs">Moment Js</Link>
        </Menu.Item>
        <Menu.Item key="dayjs">
          <Link to="dayjs">Day Js</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="10">

        <Link to="got">
          <Icon type="file" />
          Got
        </Link>
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
              <Breadcrumb.Item>Test</Breadcrumb.Item>
              <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design Base Template</Footer>
        </Layout>
      </Layout>
    );
  }
}
