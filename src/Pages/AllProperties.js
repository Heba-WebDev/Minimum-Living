import Property from "../Components/Property";
import { API } from "../API/Data";
import Pagination from "../Components/Pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function AllProperties() {

  const [properties, setProperties] = useState([]);
  
  const fetchData = async () => {
    const results = await API.get();
    setProperties(results);
  };


  useEffect(() => {
    fetchData();
  }, []);

 

  const [currentPage, setCurrentPage] = useState(1);
  const [showPerPage] = useState(6);
  const indexOfLastShown = currentPage * showPerPage;
  const indexOfFirstShown = indexOfLastShown - showPerPage;
  const currentShownProperties = properties.slice(
    indexOfFirstShown,
    indexOfLastShown
  );
  const pages = Math.ceil(properties.length / showPerPage);

  return (
    <motion.div 
     className="bg-slate-50 grid"
     initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
     >
      <div className="grid container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-14">
        <div className="flex justify-between items-center">
          <h1 className="text-black font-bold text-lg md:text-xl lg:text-2xl">
            <span className="border-b-2 border-b-red-500">List O</span>f
            Properties
          </h1>
        
        </div>

        <div className="grid grid-cols-18 md:grid-cols-19 gap-3 md:ga-5 justify-between py-8">
          {properties && currentShownProperties &&
            currentShownProperties.map((property) => {
              return (
                <Property
                  key={property.id}
                  photo={`../Properties/${property.image}.webp`}
                  title={property.location}
                  type={property.type}
                  rent={property.rent}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  size={property.size}
                  city={property.city}
                />
              );
            })}
        </div>

        <div
          className="grid grid-cols-auto
        rounded"
        >
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </div>
      </div>
    </motion.div>
  );
}
