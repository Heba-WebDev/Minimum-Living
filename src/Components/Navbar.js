import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo1 from "../Assets/Images/logo 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHouseFill } from "react-icons/bs";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname === "/";

  return (
    <>
      {/* The design of the landing page consists of the navbar and hero section having a jointly
       background image therefore the navbar changes depending on the current path => '/' or another) */}
      <nav
        className={`${
          path ? "text-white bg-transparent" : "text-black bg-gray-50"
        } relative px-2 py-3 scroll-smooth`}
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
              className={`flex flex-col lg:flex-row gap-3 list-none lg:ml-auto bg-white lg:bg-transparent py-10 lg:p-0
              top-[90%] left-[5%] w-[90%]   lg:w-fit
                 absolute lg:relative rounded-xl left-5 lg:left-auto lg:top-auto
              text-center lg:text-start `}
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className={`${
                    path ? "text-gray-600 lg:text-white md:hover:pb-2 md:hover:border-b-4" : " lg:text-gray-600 md:hover:pb-2 md:hover:border-b-4 md:hover:border-b-black"
                  } "font-normal lg:font-extralight
                  "`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="properties"
                  className={`${
                    path ? "text-gray-600 lg:text-white md:hover:pb-2 md:hover:border-b-4" : "lg:text-gray-600 md:hover:pb-2 md:hover:border-b-4 md:hover:border-b-black"
                  } "font-normal lg:font-extralight
                  "`}
                >
                  Properties
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#benefits"
                  className={`${
                    path ? "text-gray-600 lg:text-white md:hover:pb-2 md:hover:border-b-4" : "lg:text-gray-600 md:hover:pb-2 md:hover:border-b-4 md:hover:border-b-black"
                  } "font-normal lg:font-extralight
                 "`}
                >
                  Our Offerings
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#footer"
                  className={`${
                    path ? "text-gray-600 lg:text-white md:hover:pb-2 md:hover:border-b-4" : "lg:text-gray-600 md:hover:pb-2 md:hover:border-b-4 md:hover:border-b-black"
                  } "font-normal lg:font-extralight
                    "`}
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
