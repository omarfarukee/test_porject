import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../page/Home";
import NotFound from "../shared/notFound/NotFound";


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
            {
                path: '*',
                element: <NotFound/>,
            },
           
        ],
    },
   
]);

export default routes;