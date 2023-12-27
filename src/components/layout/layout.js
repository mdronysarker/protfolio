import React from "react";
import Footer from "./footer/Footer";
import Menubar from "./navbar/Menubar";

const Layout = ({ children }) => {
  return (
    <div>
      <Menubar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
