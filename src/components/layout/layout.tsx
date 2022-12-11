import { Layout } from "antd"
import { Content, Footer } from "antd/es/layout/layout"
import { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "../../config/routing"
import { CustomBreadcrumbs } from "./breadcrumb/breadcrumb"
import { CustomHeader } from "./header/header"
import { CustomSider } from "./sider/sider"



export const CustomLayout:FC<{}> = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <CustomSider/>
        <Layout className="site-layout">
            <CustomHeader />
          <Content style={{ margin: '0 16px' }}>
           <CustomBreadcrumbs/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}