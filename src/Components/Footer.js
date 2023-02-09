import React from "react";
import {HiLocationMarker} from 'react-icons/hi';
import {BsTelephoneFill} from  'react-icons/bs';
import {AiFillPrinter} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {IoLogoTwitter} from 'react-icons/io';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';
//import logofooter from '../Assets/Images/logofooter.png';
export default function Footer() {
    
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer className="container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-12 grid">
            <div className='lg:grid grid-cols-2 justify-between'>
           
           <small className='font-bold uppercase text-lg md:text-2xl flex justify-center lg:justify-start
           items-center pb-4 md:pb-0'>Minimum Living Cost</small>
            

            <div id="footer">
            <div className=''>
            <div className='grid py-2 break-word'>
             <div className='flex gap-1 mx-auto'>
                <HiLocationMarker className='text-red-500'/>
                <small>Sheikh Khalifa Bin Saeed Street, Dubai, 12345</small>
             </div>
            </div>
             
            <div className='flex gap-1 justify-center gap-9 py-4 px-1'>
            <div className='flex gap-1'>
              <BsTelephoneFill className='text-red-500'/>
                <small>(971)26131415</small>
              </div>
              <div className='flex gap-1'>
              <AiFillPrinter className='text-red-500'/>
                <small>(971)26262867</small>
              </div>
             </div>
            </div>
            
            <div className='flex justify-center gap-5 text-red-500 text-xl py-8'>
            <AiFillFacebook />
             <IoLogoTwitter />
             <FaLinkedinIn />
             <AiFillYoutube />
             <BsInstagram />
             <AiOutlineGooglePlus />
             <FaPinterest />
            </div>
            </div>
            </div>

            <hr className='opacity-50'/>
          <div className='items-center justify-between'>
          <ul className='text-xs flex flex-col lg:flex-row justify-center mx-auto 
          md:text-left gap-4 lg:gap-2  justify-between py-8 text-gray-500'>
          <li className='uppercase flex justify-center'><a href="#">
          About</a></li>
            <li className='uppercase flex justify-center'><a href="#">
            Contact us</a></li>
            <li className='uppercase flex justify-center'><a href="#">
            help</a></li>
            <li className='uppercase flex justify-center'>privacy policy</li>
            <li className='uppercase flex justify-center '><a href="#">
            disclaimer</a></li>

            </ul>

            <small className='text-[10px] md:text-[12px] text-gray-400 text-center flex justify-center
            '>Copyright © {currentYear} Minimumlivingcost. All rights reserved</small>
          </div>
        </footer>
    )
}