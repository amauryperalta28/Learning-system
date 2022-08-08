import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import UnorderedListOutlined from '@ant-design/icons/lib/icons/UnorderedListOutlined';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CollapseWidth = string | undefined;

const MenuOptions = {
    home: '1',
    tasks: '2',
    search: '3',
    newTraining: '4'
}

export const useLayoutPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedWidth, setCollapsedWidth] = useState<CollapseWidth>(undefined);
  const Navigate = useNavigate();

  const menuItems: ItemType[] = [
    {
      key: MenuOptions.home,
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: MenuOptions.tasks,
      icon: <UnorderedListOutlined />,
      label: 'Tasks',
    },
    {
      key: MenuOptions.search,
      icon: <SearchOutlined />,
      label: 'Search',
    },
    {
      key: MenuOptions.newTraining,
      icon: <PlusOutlined />,
      label: 'New',
    },
  ];

  const onClickMenuItem = (key: string)=>{
    let routes = new Map<string, string>();
    routes.set(MenuOptions.home, '/');
    routes.set(MenuOptions.newTraining, '/trainings/create');

    if(!routes.has(key)){
       return Navigate('/');
    }
    
    const path = routes.get(key)!;
//  debugger;
    return Navigate(path);
  }

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
    onClickMenuItem,
    collapsed,
    collapsedWidth,
    menuItems,
  };
};
