import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where child routes will render */}
    </>
  );
};

export default Layout;
