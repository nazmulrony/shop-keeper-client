import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input
                id="dashboardDrawer"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <div className="flex justify-end m-2">
                    <label
                        htmlFor="dashboardDrawer"
                        className="btn btn-primary drawer-button lg:hidden btn-xs"
                    >
                        Open Dashboard
                    </label>
                </div>
                <Outlet />
            </div>
            <div className="drawer-side ">
                <label
                    htmlFor="dashboardDrawer"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 bg-secondary text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Manage Products</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/add-product">Add Product</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
