import {
    HomeOutlined, PlusOutlined,
    SearchOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './LayoutPage.css';

const { Header, Sider, Content } = Layout;
type CollapseWidth = string | undefined;


export const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [collapsedWidth, setCollapsedWidth] = useState<CollapseWidth>(undefined);

    const menuItems: ItemType[] = [
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
        }

    ]

    const onBreakPoint = (crossBrakePoint: boolean) => {
        console.log(crossBrakePoint);
        setCollapsed(crossBrakePoint);

        if (crossBrakePoint) {
            setCollapsedWidth('0px');
        } else {
            setCollapsedWidth(undefined);
        }
    }

    return (
        <Layout className='layout-container' style={{ maxHeight: '100vh' }}>

            <Sider
                collapsible
                collapsed={collapsed}
                breakpoint="md"
                onBreakpoint={onBreakPoint}
                onCollapse={(value) => setCollapsed(value)}
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
                <Header className="site-layout-background"  >
                    <div className="header">
                        <div className="header-title d-flex justify-content-center">Training Portal</div>
                        <div className="user-content">
                            <img className="user-miniature" src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="User avatar" />
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
                        marginLeft: 20
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );

};
