import Testimonial from "./Testimonial";
import { useState } from "react";
import {RxDotFilled} from 'react-icons/rx';
import cover from '../Assets/Images/cover.png';

export default function Testimonials() {
    
    const slider = [<Testimonial />, <Testimonial />, <Testimonial />];
    const dots = [<RxDotFilled size={20} className="hover:cursor-pointer"/>, 
    <RxDotFilled size={20}  className="hover:cursor-pointer"/>, 
    <RxDotFilled size={20} className="hover:cursor-pointer"/>];
    const [sliderIndex, setSliderIndex] = useState(0);

   function handleSliderDots(index) {
    setSliderIndex(index)
   };
    return (
    <div className="bg-red-50 py-2">
   
     <div>
     <img src={cover} />   
     </div>   
     <div>
        {slider[sliderIndex]}
     </div>
     <div className="flex px-4">
        {dots.map((dot, index) => (
            index == sliderIndex ? <div className='text-red-500' onClick={() => handleSliderDots(index)}>{dot}</div>
             : <div className='text-gray-300'onClick={() => handleSliderDots(index)} >{dot}</div>
        ))}
     </div>
    </div>
    )
}