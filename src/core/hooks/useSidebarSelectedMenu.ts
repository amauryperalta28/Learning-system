import { Pages } from '@core/pages/LayoutPage/LayoutPage';
import { useState } from 'react';

export const useSidebarSelectedMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(Pages.home);

  const setActive = (pageIndex: Pages) => {
    setSelectedMenu(pageIndex);
  };

  return { selectedMenu, setActive };
};
