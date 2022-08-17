import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import { Outlet } from 'react-router-dom';
import './LayoutPage.css';
import { useLayoutPage } from './useLayoutPage';
import MenuInfo from 'antd/lib/menu/index';


const { Header, Sider, Content } = Layout;

export const LayoutPage = () => {
  const { collapsed, 
    onBreakPoint, 
    onCollapse,
    collapsedWidth, 
    menuItems } =  useLayoutPage();

  return (
    <Layout className="layout-container" style={{ maxHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={onBreakPoint}
        onCollapse={onCollapse}
        collapsedWidth={collapsedWidth}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background">
          <div className="header">
            <div className="header-title d-flex justify-content-center">
              Training Portal
            </div>
            <div className="user-content">
              <img
                className="user-miniature"
                src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                alt="User avatar"
              />
            </div>
          </div>
        </Header>
        <Content
          className="layout-content"
          style={{
            margin: '24px 25px',
            padding: 24,
            minHeight: 300,
            maxHeight: '100vh',
            overflow: 'auto',
            marginLeft: 20,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
