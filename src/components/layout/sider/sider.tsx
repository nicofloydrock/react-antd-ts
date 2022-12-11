import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { FC, useState } from "react";
import CustomMenu from "../menu/Menu";


export const CustomSider:FC<{}> = (props) => {

    const [collapsed, setCollapsed] = useState(false);
    
    return (

    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <CustomMenu/>
    </Sider>
)}