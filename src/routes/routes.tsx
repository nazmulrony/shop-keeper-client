import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import AddProduct from '../pages/AddProduct/AddProduct';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/add-product',
                element: <AddProduct />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);
