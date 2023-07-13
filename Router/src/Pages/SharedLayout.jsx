import React from "react";
import { Link, Outlet } from "react-router-dom";

import StyledNavbar from "../Components/StyledNavbar"

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default Home;
