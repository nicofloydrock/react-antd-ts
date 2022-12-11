import { FC } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuDummy } from '../../../api/dummy/menuDummy';

type MenuItem = Required<MenuProps>['items'][number];

let items: MenuItem[]  = menuDummy.map((item: MenuItem) => item);

const CustomMenu:FC<{}> = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />

  );
};


export default CustomMenu;