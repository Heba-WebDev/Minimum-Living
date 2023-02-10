import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function SharedLayout() {
  const location = useLocation();
  const [path, setPath] = useState(false);

  useEffect(() => {
    location.pathname === "/" ? setPath(false) : setPath(true);
  },[location]);

  return (
    <>
      {path && <Navbar />}

      <Outlet />

      <Footer />
    </>
  );
}
