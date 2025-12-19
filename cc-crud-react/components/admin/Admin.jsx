import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  
  return (
    <>
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="sales">Sales</Link>
        </li>
        <li>
          <Link to="seller">Seller</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Admin;
