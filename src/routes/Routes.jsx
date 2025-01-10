import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../page/Home";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:<Home/>,
            },
            {
                path: '/home',
                element:<Home/>,
            },
           
        ],
    },
   
]);

export default routes;