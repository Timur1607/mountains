import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                // index: true,
                // element:<Signin/>,
            },
            {
                // path: '/ts-chat/Login',
                // element:<Login/>,
            },
        ]
    },
    {
        path: '*',
        element: <div style={{ padding: '2rem' }}>Ошибка 404: Страница не найдена</div>
    }
])

export default router