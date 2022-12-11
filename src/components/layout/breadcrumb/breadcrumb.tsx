import { Breadcrumb } from "antd"
import { FC } from "react"


export const CustomBreadcrumbs:FC<{}> = () => { 
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    )
}