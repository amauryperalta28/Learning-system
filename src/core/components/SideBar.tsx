import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined'
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined'
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined'
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { useState } from 'react'
import './Sidebar.css'

type CollapseWidth = string | undefined;

export const SideBar = () => {
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

    ];

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
        <>
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
        </>
    )
}