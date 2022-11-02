import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/Components/Layouts/Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default Layout;
