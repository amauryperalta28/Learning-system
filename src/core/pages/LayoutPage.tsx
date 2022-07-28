import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined, SearchOutlined, UnorderedListOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './LayoutPage.css';

const { Header, Sider, Content } = Layout;

export const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='layout-father'>
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
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );

};
