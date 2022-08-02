import {
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PlusOutlined,
    SearchOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import AntdLayout from 'antd/lib/layout';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Menu from 'antd/lib/menu';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './LayoutPage.css';

// const { Header, Sider, Content } = Layout;
type CollapseWidth = string | undefined;

export const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [collapsedWidth, setCollapsedWidth] = useState<CollapseWidth>(undefined)

    const onBreakPoint = (crossBrakePoint: boolean) =>{
        console.log(crossBrakePoint);
        setCollapsed(crossBrakePoint);

        if(crossBrakePoint){
            setCollapsedWidth('0px');
        }else {
            setCollapsedWidth(undefined);
        }
    }

    return (
        <AntdLayout className='layout-container'>

            <Sider trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="md"
                onBreakpoint={onBreakPoint}

                collapsedWidth={collapsedWidth}
            >
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

            <AntdLayout className="site-layout">
                <Header className="site-layout-background" >
                    <div className="header">
                        <div className="header-title d-flex justify-content-center">Training Portal</div>
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
                        minHeight: 600,
                        maxHeight: '100vh',
                        overflow: 'auto'
                    }}
                >
                    <Outlet />
                </Content>
            </AntdLayout>
        </AntdLayout>
    );

};
