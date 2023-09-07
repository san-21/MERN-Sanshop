import React, { useState } from "react";

import { Box, CssBaseline, Toolbar } from "@mui/material";

import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import ProductCreate from "./pages/Products/ProductCreate";
import ProductDetail from "./pages/Products/ProductDetail";

import { useSelector } from "react-redux";
import Users from "pages/Users/Users";
import useMediaQuery from "@mui/material/useMediaQuery";
import EditProduct from "pages/Products/EditProduct";
import Layout from "common/Layout";
import UserDetail from "pages/Users/UserDetail";
import UsersAccount from "pages/Users/UsersAccount";
import Login from "pages/Login";
import ProtectUrl from "./authentication/ProtectUrl";
import { Roles } from "./config/allowedRoles";

const App = () => {
  const nonMobile = useMediaQuery("(min-width:564px)");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectUrl allowedRoles={[...Object.values(Roles)]} />}>
        <Route path="dashboard" element={<Layout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="product/products" element={<Products />} />
          <Route path="product/productdelete/:id" element={<Products />} />
          <Route path="product/productsdetail" element={<ProductDetail />} />
          <Route path="product/productscreate" element={<ProductCreate />} />
          <Route path="product/products/:id" element={<EditProduct />} />
          <Route
            path="product/productsdetail/:id"
            element={<ProductDetail />}
          />

          {/* userRoutes */}
          <Route
            element={<ProtectUrl allowedRoles={[Roles.Admin, Roles.Owner]} />}
          >
            <Route path="user/users" element={<Users />} />
            <Route path="user/addnewuser" element={<Users />} />
            <Route path="user/deleteuser" element={<Users />} />
            <Route path="user/getuser/:id" element={<Users />} />
            <Route path="user/updateuser/:id" element={<Users />} />

            <Route path="user/account" element={<UsersAccount />} />
            <Route path="user/signupuser" element={<UsersAccount />} />
          </Route>
        </Route>
      </Route>
      {/* </Route> */}
    </Routes>
  );
};

export default App;
