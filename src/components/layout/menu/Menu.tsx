import { FC } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuDummy } from '../../../api/dummy/menu';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

let items: MenuItem[]  = menuDummy.map((item: MenuItem) => item);


const CustomMenu:FC<{}> = () => {
  let navigate = useNavigate();
  
  
  const handleMenuClick = (events:any) => {
    navigate("/"+events.key);
    console.log(events);

  }
  return (
    <Menu  onClick={handleMenuClick} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />

  );
};


export default CustomMenu;