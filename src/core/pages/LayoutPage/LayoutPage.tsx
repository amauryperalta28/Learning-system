import Layout from 'antd/lib/layout';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../../components/SideBar';
import './LayoutPage.css';

const { Header, Content } = Layout;

export const LayoutPage = () => {
  return (
    <Layout className="layout-container">
      <SideBar />

      <Layout className="site-layout">
        <Header className="site-header-background">
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
        <Content className="layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
