
import Property from "./Property";
import { Location, useLocation } from "react-router-dom";
import {API} from '../API/Data';
import { useEffect, useState } from "react";
export default function AllProperties() {

  const location = useLocation();
  const [proeprties, setProperties] = useState(null);
 

  
    async function fetchData() {
       const results = await API.get()
       setProperties(results)
    };

   useEffect(()=>{
    fetchData();
   }, [])
   

  
  const imagesBaseURL = '../Assets/Properties/9318028dd5f2o';
    return (
        <div className="bg-slate-50">
        <div className="grid container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-14">
    
        <div className="flex justify-between items-center">
            <h2 className="text-black font-bold text-lg md:text-xl lg:text-2xl"><span className="border-b-2 border-b-red-500">List O</span>f Properties</h2>
            <button className="bg-red-500 text-white text-[12px] md:text-base py-1 px-3 md:py-2 md:px-4 rounded">View All Property</button>
        </div>

        <div className="grid grid-cols-18 md:grid-cols-19 gap-5 justify-between py-8">
 
        {proeprties && proeprties.map((property) => {
 
            return (
              
              <Property key={property.id}
              photo = {`./Properties/${property.image}.webp`}
              title={property.location}
              type={property.type}
              rent={property.rent}
              bedrooms={property.bedrooms}
              bathrooms={property.bathroom}
              size={property.size}
              />
            
          )})} 
         
           
        </div>
        
        {/* <div className="grid grid-cols-5 border border-gray-300 border-solid w-72 mx-auto
        rounded">
       <button className="flex justifiy-center border-r border-gray-300 p-2">First</button>
       <button className="border-r border-gray-300 p-2">1</button>
       <button className="border-r border-gray-300 p-2">2</button>
       <button className="border-r border-gray-300 p-2">3</button>
       <button className="p-2">Next</button>
        </div> */}
        </div>
        </div>
    )
       
}