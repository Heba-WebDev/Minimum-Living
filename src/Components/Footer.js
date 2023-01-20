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
import logofooter from '../Assets/Images/logofooter.png';
export default function Footer() {
    
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer className="container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-12 grid">
            <div className='lg:grid grid-cols-2 justify-between'>
           
           <small className='font-bold uppercase text-2xl flex justify-center lg:justify-start
           items-center pb-4 md:pb-0'>Minimum Living Cost</small>
            

            <div >
            <div className=''>
            <div className='grid py-2 break-word'>
             <div className='flex gap-1 mx-auto'>
                <HiLocationMarker className='text-red-500'/>
                <small>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</small>
             </div>
            </div>
             
            <div className='flex gap-1 justify-center gap-9 py-4 px-1'>
            <div className='flex'>
              <BsTelephoneFill className='text-red-500'/>
                <small>(123) 456-7890</small>
              </div>
              <div className='flex'>
              <AiFillPrinter className='text-red-500'/>
                <small>(123) 456-7890</small>
              </div>
             </div>
            </div>
            
            <div className='flex justify-around text-red-500 text-xl py-8'>
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
          <div className='items-center justify-between '>
          <ul className='text-sm flex flex-row mx-auto md:text-left gap-2  justify-between py-8'>
            <li className='uppercase'>About</li>
            <li className='uppercase'>Contact us</li>
            <li className='uppercase'>help</li>
            <li className='uppercase'>privacy policy</li>
            <li className='uppercase'>disclaimer</li>

            </ul>

            <small className='text-gray-400 text-center md:flex justify-center lg:justify-end'>Copyright © {currentYear} Minimumlivingcost. All rights reserved</small>
          </div>
        </footer>
    )
}