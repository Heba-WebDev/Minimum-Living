import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
//Icons
import logo1 from "../Assets/Images/logo 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";


export default function Navbar() {
  //States
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname === "/";

  return (
    <>
      {/* The design of the landing page consists of the navbar and hero section having a jointly
       background image therefore the navbar changes depending on the current path / or another) */}
      <nav
        className={`${
          path ? "text-white bg-transparent" : "text-black bg-gray-50"
        } relative px-2 py-3 `}
      >
        {/* The container wrapping navbar */}
        <div
          className="container md:max-w-3xl lg:max-w-5xl md:w-3/4 py-2 
              lg:border-b mx-auto px-4 flex flex-wrap items-center justify-between "
        >
          {/* The div with the logo and hamburger menu icon */}
          <div className="w-full relative flex justify-between items-center  lg:w-auto lg:static lg:block lg:justify-start">
            {path ? (
              <img src={logo1} className="logo" />
            ) : (
              <Link to="/">
                <BsFillHouseFill size="18" />
              </Link>
            )}
            <button
              className="text-white cursor-pointer text-xl leading-none  py-1 
                border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu
                className={`${path ? "text-white" : "text-black"}`}
              />
            </button>
          </div>

          {/* The navbar's list */}

          <div
            className={
              "lg:flex flex-grow items-center self-end" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger "
          >
            <ul
              className="flex flex-col lg:flex-row gap-3 list-none lg:ml-auto bg-white lg:bg-transparent py-10 lg:p-0
         top-[90%] left-[5%] w-[90%]   lg:w-fit
            absolute lg:relative rounded-xl left-5 lg:left-auto lg:top-auto
         text-center lg:text-start"
            >
              <li className="nav-item">
                <a
                  href="#"
                  className="font-normal lg:font-extralight 
         lg:text-white md:hover:pb-2 md:hover:border-b-4"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="font-normal lg:font-extralight
          lg:text-white  md:hover:pb-2 md:hover:border-b-4"
                >
                  Landloard
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="font-normal lg:font-extralight 
         lg:text-white md:hover:pb-2 md:hover:border-b-4"
                >
                  Tenants
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="font-normal lg:font-extralight
           lg:text-white  md:hover:pb-2 md:hover:border-b-4"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
