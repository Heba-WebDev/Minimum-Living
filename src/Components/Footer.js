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

export default function Footer() {
    
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer className="container mx-auto max-w-3xl md:w-3/4 py-12 grid">
            <div>

            <small className="text-3xl font-bold">Logo</small>

            <div className='grid'>
             <div className='flex gap-1 justify-between'>
                <HiLocationMarker className='text-red-500'/>
                <small>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</small>
             </div>
            </div>
             
            <div className='flex gap-1 justify-between'>
            <div className='flex'>
              <BsTelephoneFill className='text-red-500'/>
                <small>(123) 456-7890</small>
              </div>
              <div className='flex'>
              <AiFillPrinter className='text-red-500'/>
                <small>(123) 456-7890</small>
              </div>
             </div>
            
            <div className='flex justify-around text-red-500 text-xl'>
            <AiFillFacebook />
             <IoLogoTwitter />
             <FaLinkedinIn />
             <AiFillYoutube />
             <BsInstagram />
             <AiOutlineGooglePlus />
             <FaPinterest />
            </div>
            </div>

            <hr className='opacity-50'/>
            <ul className='text-sm flex flex-col md:flex-row text-center md:text-left gap-3 justify-around py-3'>
            <li className='uppercase'>About</li>
            <li className='uppercase'>Contact us</li>
            <li className='uppercase'>help</li>
            <li className='uppercase'>privacy policy</li>
            <li className='uppercase'>disclaimer</li>

            </ul>

            <small className='text-gray-400'>Copyright © {currentYear} Minimumlivingcost. All rights reserved</small>
        </footer>
    )
}