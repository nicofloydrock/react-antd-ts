type Status = "" | "error" | "warning" | undefined


export interface IInput { 
    title:string,
    name: string,
    type: string,
    placeholder: string,
    status:Status,
    value:string
}


export const inputs:IInput[] = [
    {   
        title: "Input Normal",
        name: "text",
        type: "text",
        placeholder: "Enter text",
        status:"",
        value:"",
    },
    {
        title: "Input Warning",
        name: "text",
        type: "text",
        placeholder: "Enter text",
        status:"warning",
        value:"",

    },
    {
        title: "Input Error",
        name: "text",
        type: "text",
        placeholder: "Enter text",
        status:"error",
        value:"",

    },

]