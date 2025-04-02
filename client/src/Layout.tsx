import React from "react";
import { Outlet } from "react-router";
import Navigation from "./components/navigation/Navigation";
import { Main } from "./components/styled/layout/StyledLayout";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
