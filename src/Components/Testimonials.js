import Testimonial from "./Testimonial";
import { useState } from "react";
import {RxDotFilled} from 'react-icons/rx';
import cover from '../Assets/Images/cover.png';
import Ellipse4 from '../Assets/Images/Ellipse4.png';
import jessica from '../Assets/Images/jessica.webp';
import alex from '../Assets/Images/alex.jpeg';

export default function Testimonials() {
    
    const slider = [<Testimonial name="Harry Wilson" title="Property Owner" photo={Ellipse4} />,
     <Testimonial name="Jessica Owne" title="Tenant" photo={jessica}/>,
      <Testimonial name="Alex Mayor" title="Property Owner" photo={alex}/>];
    const dots = [<RxDotFilled size={20} className="hover:cursor-pointer"/>, 
    <RxDotFilled size={20}  className="hover:cursor-pointer"/>, 
    <RxDotFilled size={20} className="hover:cursor-pointer"/>];
    const [sliderIndex, setSliderIndex] = useState(0);

   function handleSliderDots(index) {
    setSliderIndex(index)
   };
    return (
    <div className="bg-red-50 py-8 md:py-2 ">
    <div className="lg:flex lg:flex-row-reverse md:max-w-xl lg:max-w-5xl mx-auto">

    
     <div>
     <img src={cover} className="md:max-w-xl md:mx-auto"/>   
     </div>   
     <div className="">
        {slider[sliderIndex]}
        <div className="flex px-4">
        {dots.map((dot, index) => (
            index == sliderIndex ? <div key={index} className='text-red-500' onClick={() => handleSliderDots(index)}>{dot}</div>
             : <div key={index} className='text-gray-300'onClick={() => handleSliderDots(index)} >{dot}</div>
        ))}
     </div>
     </div>
    </div>
    </div>
    )
}