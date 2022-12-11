import { Layout } from "antd"
import { Content, Footer } from "antd/es/layout/layout"
import { FC } from "react"
import { CustomRouter } from "../../config/routing"
import { CustomBreadcrumbs } from "./breadcrumb/breadcrumb"
import { CustomFooter } from "./footer/footer"
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
           <CustomRouter/>
          </Content>
          <CustomFooter />
        </Layout>
      </Layout>
    )
}