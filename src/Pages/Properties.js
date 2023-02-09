import { Link } from "react-router-dom";
import Property from "../Components/Property";
import { useState, useEffect } from "react";
import { API } from "../API/Data";
import { motion } from "framer-motion";

export default function Properties() {
  const [properties, setProperties] = useState(null);

  const fetchData = async () => {
    const results = await API.get();
    setProperties(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div 
    className="bg-slate-50"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="grid container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-14">
        <div className="flex justify-between items-center">
          <h2 className="text-black font-bold text-lg md:text-xl lg:text-2xl">
            <span className="border-b-2 border-b-red-500">List O</span>f
            Properties
          </h2>
          <Link to="properties">
            <span
              className="bg-red-500 text-white text-[12px]
            md:text-base py-1 px-3 md:py-2 md:px-4 rounded"
            >
              View All Properties
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-18 md:grid-cols-19 gap-5 justify-between py-8">
          {properties &&
          
            properties.slice(0, 6).map((property) => {
              
              return (
                
                <Property
                  key={property.id}
                  photo={`./Properties/${property.image}.webp`}
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
      </div>
    </motion.div>
  );
}
