import logo1 from '../Assets/Images/logo 1.png'
import hamburgeriocn from '../Assets/Images/hamburgericon.png'
import Rectangle1 from '../Assets/Images/Rectangle 1.png'
import React from 'react';
import { useState } from "react";

export default function Headers() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <header className="hero w-screen h-screen py-3">

            {/* <div className="container m-auto py-2 w-full grid">
            

            <nav className='flex w-full gap-1 justify-between md:justify-around items-center justify-self-center py-2
            md:border-b md:w-9/12'>
                <div className=''>
                   <img src={logo1} className='logo' />
                </div>
                <ul className='flex  gap-5 md:gap-10 self-end text-white'>
                    <li><a href='#' className='font-extralight  md:hover:pb-2 md:hover:border-b-4'>Home</a></li>
                    <li><a href='#' className='font-extralight md:hover:pb-2 md:hover:border-b-4'>Landloard</a></li>
                    <li><a href='#' className='font-extralight md:hover:pb-2 md:hover:border-b-4'>Tenants</a></li>
                    <li><a href='#' className='font-extralight  md:hover:pb-2 md:hover:border-b-4'>Contact Us</a></li>
                </ul>
            </nav>
            </div>
         */}

             {/* The navbar */}
            <nav className='relative px-2 py-3 mb-3'>

                {/* The container wrapping navbar */}
                <div className='container max-w-3xl md:w-3/4 py-2
                 lg:border-b mx-auto px-4 flex flex-wrap items-center justify-between '>
                 {/* The div with the logo and hamburger menu icon */}
               <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                 <img src={logo1} className='logo' />
                 <button  className="text-white cursor-pointer text-xl leading-none  py-1 
                   border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                   type="button"
                   onClick={() => setNavbarOpen(!navbarOpen)}> 
                   <img src={hamburgeriocn} />
                 </button>
               </div>
              
              {/* The navbar's list */}

          <div   className={  "lg:flex flex-grow items-center self-end" +  (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger">

            <ul className="flex flex-col lg:flex-row gap-3 list-none lg:ml-auto bg-white lg:bg-transparent p-5 lg:p-0
            w-11/12 md:w-9/12 lg:w-fit top-40 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 
            -translate-y-1/2 lg:-translate-y-0 mx-auto lg:mx-0 absolute lg:relative rounded-xl left-5 lg:left-auto top-16 lg:top-auto
            text-center lg:text-start">

            <li className="nav-item"><a href='#' className='font-normal lg:font-extralight 
            lg:text-white md:hover:pb-2 md:hover:border-b-4'>Home</a></li>
            <li className="nav-item"><a href='#' className='font-normal lg:font-extralight
             lg:text-white  md:hover:pb-2 md:hover:border-b-4'>Landloard</a></li>
            <li className="nav-item"><a href='#' className='font-normal lg:font-extralight 
            lg:text-white md:hover:pb-2 md:hover:border-b-4'>Tenants</a></li>
             <li className="nav-item"><a href='#' className='font-normal lg:font-extralight
              lg:text-white  md:hover:pb-2 md:hover:border-b-4'>Contact Us</a></li>
            </ul>
          </div>

          </div>

           </nav>
        
        {/* The hero */}

        <div className='container mx-auto max-w-3xl md:w-3/4 py-2 px-4 flex flex-wrap items-center 
        justify-between grid grid-cols-16 gap-4 py-12'>
           
           <div className='flex self-center'>
           <h1 className='text-white text-center md:text-left 
           text-5xl lg:text-5xl antialiased'>
            The most affortable place to stay in the san franciso bay area.</h1>
           </div>

           <div className='object-fill max-w-xs mx-auto'>
             <img src={Rectangle1} className='rounded-xl'/>
           </div>
        </div>
        </header>
    )
}