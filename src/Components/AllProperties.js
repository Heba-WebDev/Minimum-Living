
import Property from "./Property";
import {API} from '../API/Data';
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
export default function AllProperties() {


  const [properties, setProperties] = useState([]);
    async function fetchData() {
       const results = await API.get();
       console.log(results)
       setProperties(results);
    };

    useEffect(() => {
      fetchData();
    }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage] = useState(6);
  const indexOfLastShown = currentPage * showPerPage;
  const indexOfFirstShown = indexOfLastShown - showPerPage;
  const currentShownProperties = properties.slice(indexOfFirstShown, indexOfLastShown);
  const pages = Math.ceil(properties.length / showPerPage);
   


    return (
        <div className="bg-slate-50 grid">
        <div className="grid container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-14">
    
        <div className="flex justify-between items-center">
            <h2 className="text-black font-bold text-lg md:text-xl lg:text-2xl"><span className="border-b-2 border-b-red-500">List O</span>f Properties</h2>
            <button className="bg-red-500 text-white text-[12px] md:text-base py-1 px-3 md:py-2 md:px-4 rounded">View All Property</button>
        </div>

        <div className="grid grid-cols-18 md:grid-cols-19 gap-5 justify-between py-8">
 
        {properties && currentShownProperties.map((property) => {
 
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
        
         <div className="grid grid-cols-auto
        rounded">
       <Pagination 
       currentPage = {currentPage}
       setCurrentPage = {setCurrentPage}
       pages = {pages}
       />
        </div>  
        </div>
        </div>
    )
       
}