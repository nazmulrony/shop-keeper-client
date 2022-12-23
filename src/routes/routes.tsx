import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Main from '../layouts/Main';
import AddProduct from '../pages/AddProduct/AddProduct';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import ManageProducts from '../pages/ManageProducts/ManageProducts';

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
                path: '/dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <ManageProducts />,
                    },
                    {
                        path: '/dashboard/add-product',
                        element: <AddProduct />,
                    },
                ],
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);
