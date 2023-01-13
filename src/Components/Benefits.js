import unsplashoGmf8o53LeE from "../Assets/Images/unsplashoGmf8o53LeE.png";
import { FaHospital } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";
import { BiLayer } from "react-icons/bi";
import { RiPlantLine } from 'react-icons/ri';
import { GiPayMoney } from "react-icons/gi";

export default function Benefits() {
  return (
    <div className="container mx-auto max-w-3xl md:w-3/4 py-12">
      <div>
        <h2 className="text-black font-bold text-2xl pb-6">
          Minimum living cost takes care of everything
        </h2>
      </div>

      <div className="grid grid-cols-18">

      <div>
        <div className="">
          <img src={unsplashoGmf8o53LeE} 
                    className='rounded-tl-[20px] rounded-br-[20px]'/> 
        </div>
       


        <section className="grid grid-cols-18 md:grid-cols-19 gap-2 justify-between py-8">

        <div className="grid gap-1 md:gap-2 justify-self-center">
            <div className="w-14 shadow-2xl rounded-lg flex items-center justify-content-center">
         
                <RiMoneyDollarCircleLine className="fill-red-500 p-2 " size={'58px'}/>
            </div>
            <div>
            <p className="max-w-[12ch]">Pay as Little as possible!</p>
            </div>
          </div>

          <div className="grid gap-1 md:gap-2 justify-self-center">
            <div className="w-14 shadow-2xl rounded-lg flex items-center justify-content-center">
                <FaHospital className="fill-red-500 p-2 " size={'58px'}/>
            </div>
            <div>
            <p className="max-w-[12ch]">Enjoy wisdom of community!</p>
            </div>
          </div>


          <div className="grid gap-1 md:gap-2 justify-self-center">
            <div className="w-14 shadow-2xl rounded-lg flex items-center justify-content-center">
                <BiLayer className="fill-red-500 p-2 " size={'58px'}/>
            </div>
            <div>
            <p className="max-w-[12ch]">Let's somebody else take care of Landlord!</p>
            </div>
          </div>

          <div className="grid gap-1 md:gap-2 justify-self-center">
            <div className="w-14 shadow-2xl rounded-lg flex items-center justify-content-center">
         
                <RiPlantLine className="fill-red-500 p-2 " size={'58px'}/>
            </div>
            <div>
            <p className="max-w-[12ch]">Enjoy peaceful Environment!</p>
            </div>
          </div>

          <div className="grid gap-1 md:gap-2 justify-self-center">
            <div className="w-14 shadow-2xl rounded-lg flex items-center justify-content-center">
                <RiShieldStarLine className="fill-red-500 p-2 " size={'58px'}/>
            </div>
            <div>
            <p className="max-w-[12ch]">Stay Safe! Save Money!</p>
            </div>
          </div>


          <div className="grid gap-1 md:gap-2 justify-self-center">
            <div className="w-14 shadow-2xl rounded-lg flex items-center justify-content-center">
                <GiPayMoney className="fill-red-500 p-2 " size={'58px'}/>
            </div>
            <div>
            <p className="max-w-[12ch]">Pay for what you use !</p>
            </div>
          </div>

        </section>
      </div>
      </div>
    </div>
  );
}
