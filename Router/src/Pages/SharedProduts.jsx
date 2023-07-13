import React from "react";
import { Outlet } from "react-router-dom";

const SharedProduts = () => {
  <>
    <h2>products</h2>
    <Outlet />
  </>;
};

export default SharedProduts;
