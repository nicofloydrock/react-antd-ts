import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<p>Default</p>
    },
    {
        path: "/buttons",
        element: <p>Butons Example</p>,
    },
    {
        path: "/inputs",
        element: <p>Inputs Example</p>,
    },
    {
        path: "/home",
        element: <p>Hom Example</p>,
    },
  ]);