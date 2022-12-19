import { Input, Space } from "antd";
import { FC, useState } from "react";
import { inputs } from "../../models/input";

export const CustomInputs: FC<{}> = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            {
                inputs.map((input, index) => (
                    <div key={index}>
                        <h1>{input.title}</h1>
                        <Space>
                            <Input
                                key={index}
                                status={input.status}
                                onInput={handleChange}
                            />

                            <label key={index} >Value : {inputValue}</label>
                        </Space>
                    </div>
                ))
            }
        </>
    )
}