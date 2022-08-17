import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined';

import type { MenuProps } from 'antd/es/menu';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
type CollapseWidth = string | undefined;

type MenuItem = Required<MenuProps>['items'][number];

const MenuOptions = {
  home: '1',
  tasks: '2',
  search: '3',
  newTraining: '4',
};

export const useLayoutPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedWidth, setCollapsedWidth] =
    useState<CollapseWidth>(undefined);

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  };

  const menuItems: MenuItem[] = [
    getItem(<NavLink to="/">Home</NavLink>, MenuOptions.home, <HomeOutlined />),
    getItem(
      <NavLink to="/">Tasks</NavLink>,
      MenuOptions.tasks,
      <UnorderedListOutlined />
    ),
    getItem(
      <NavLink to="/">Search</NavLink>,
      MenuOptions.search,
      <SearchOutlined />
    ),
    getItem(
      <NavLink to="/trainings/create">New</NavLink>,
      MenuOptions.newTraining,
      <PlusOutlined />
    ),
  ];

  const onBreakPoint = (crossBrakePoint: boolean) => {
    setCollapsed(crossBrakePoint);

    if (crossBrakePoint) {
      setCollapsedWidth('0px');
    } else {
      setCollapsedWidth(undefined);
    }
  };

  const onCollapse = (value: boolean) => setCollapsed(value);

  return {
    onBreakPoint,
    onCollapse,
    collapsed,
    collapsedWidth,
    menuItems,
  };
};
