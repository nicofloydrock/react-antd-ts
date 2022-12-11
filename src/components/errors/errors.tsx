import { Button, Result } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export const CustomError:FC<{}> = () => (

    <Result
    status="404"
    title="Ups"
    subTitle="La ruta no esta disponible"
    extra={<Link to="/home"><Button type="primary">Back Home</Button></Link>}
  />
)