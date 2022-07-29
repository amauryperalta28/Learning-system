import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined'
import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined'
import MenuUnfoldOutlined from '@ant-design/icons/lib/icons/MenuUnfoldOutlined'
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined'
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { useState } from 'react'
import './Sidebar.css'

export const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
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
        </>
    )
}