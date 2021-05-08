import React from "react";
import Homeedit from "../components/Home";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <>
      <Homeedit />
      <Header />
      <div className="layout-container">{props.children}</div>
    </>
  );
};

export default Layout;
