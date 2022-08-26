import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined';
import { useSidebarSelectedMenu } from '@core/hooks/useSidebarSelectedMenu';

import type { MenuProps } from 'antd/es/menu';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pages } from './LayoutPage';

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
  const [collapsedWidth, setCollapsedWidth] =  useState<CollapseWidth>(undefined);
  const { setActive, selectedMenu } = useSidebarSelectedMenu();

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  };

  const menuItems: MenuItem[]  = useMemo(()=> [
    getItem(<Link to="/" onClick={ () => setActive(Pages.home)}>Home</Link>, MenuOptions.home, <HomeOutlined />),
    getItem(
      <Link to="/tasks" onClick={ () => setActive(Pages.tasks)}>Tasks</Link>,
      MenuOptions.tasks,
      <UnorderedListOutlined />
    ),
    getItem(
      <Link to="/search" onClick={ () => setActive(Pages.tasks)}>Search</Link>,
      MenuOptions.search,
      <SearchOutlined />
    ),
    getItem(
      <Link to="/trainings/create" onClick={ () => setActive(Pages.new)}>New</Link>,
      MenuOptions.newTraining,
      <PlusOutlined />
    ),
  ], [])

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
    selectedMenu
  };
};
