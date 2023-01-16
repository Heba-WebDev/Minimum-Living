import Image2 from '../Assets/Images/Image 2.png';
import unsplashnEtpvJjnPVo from '../Assets/Images/unsplashnEtpvJjnPVo.png';
import unsplashXdWkFaHI97c from '../Assets/Images/unsplashXdWkFaHI97c.png';
import unsplashuooMllXe6gE from '../Assets/Images/unsplashuooMllXe6gE.png';

export default function Flexibility() {

    return (
        <div className="container mx-auto max-w-3xl md:w-3/4 py-12 ">

           <div className="grid justify-center pb-6 md:pb-0">
            <div className="flex items-end gap-2">
             <div className='relative'>
             <img src={unsplashnEtpvJjnPVo} className='object-cover h-56 w-44 rounded-xl'/>
             <h3 className='absolute top-2 left-6 text-white'>Flexible Leases</h3>
             </div>
            <div className='relative'>
            <img src={Image2} className='object-cover h-44 w-44 rounded-xl'/>
            <h3 className='absolute top-2 left-2 text-white text-center'>7-Day Happiness
              Guaranteed</h3>
            </div>
            </div>
            <div className="flex gap-2 pt-2">
             <div className='relative'>
             <div className='rounded-xl bg-black'>
             <img src={unsplashuooMllXe6gE} className='object-cover w-36 h-56 rounded-xl opacity-80'/>
             </div>
             <h3 className='absolute top-2 left-1 text-white text-center'>
             Monthly House Cleaning</h3>
             </div>
            <div className='relative'>
            <img src={unsplashXdWkFaHI97c} className='object-cover w-60 h-72 rounded-xl'/>
            <h3 className='absolute top-2 left-12 text-white max-w-[14ch]'>
            Choose Your Own Roommate</h3>
            </div>
            </div>
           </div> 
           <div className='grid pt-6 md:pt-0'>
           <h2 className="text-black font-bold text-2xl pb-2 text-center md:text-left
            ">
            Flexibility and options to suit your lifestyle.</h2>
            <p className="text-sm leading-6 pb-4
            w-11/12 md:w-full mx-auto md:mx-0">You need it? We got it. We make finding your next home easy,
                comfortable,and simple. From our happiness guarantee to our 
                selective roommate finder option.
                 We provide you the flexibility that you most desire.
             </p>
             <button className="bg-red-500 text-white py-2 px-4 rounded-lg
             text-sm w-1/2 mx-auto max-w-[158px]">Search Rooms</button>
           </div>
        </div>
    )
}