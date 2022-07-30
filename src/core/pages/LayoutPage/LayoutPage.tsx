import {
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PlusOutlined,
    SearchOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './LayoutPage.css';

const { Header, Sider, Content } = Layout;

export const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='layout-container'>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <UnorderedListOutlined />,
                            label: 'Tasks',
                        },
                        {
                            key: '3',
                            icon: <SearchOutlined />,
                            label: 'Search',
                        },
                        {
                            key: '4',
                            icon: <PlusOutlined />,
                            label: 'New',
                        },
                    ]}
                />
            </Sider>

            <div className="sidebar-button">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    style: { position: 'relative' },
                    onClick: () => setCollapsed(!collapsed),
                })}

            </div>

            <Layout className="site-layout">
                <Header className="site-layout-background" >
                    <div className="header">
                        <div className="header-title">Training Portal</div>
                        <div className="user-content">
                            <img className="user-miniature" src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="User avatar" />
                        </div>
                    </div>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        maxHeight: '100vh',
                        overflow: 'auto'
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );

};
