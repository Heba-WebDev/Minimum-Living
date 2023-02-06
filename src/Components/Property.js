import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { CgHashtag } from "react-icons/cg";

export default function Property({
  photo,
  title,
  type,
  rent,
  bedrooms,
  bathrooms,
  size,
  city
}) {

  return (
    <div className="bg-white rounded-xl grid border border-gray-100 border-solid">
      <img src={photo} alt="" className="rounded-t-xl" />
      <h3 className="py-2 px-2 text-sm md:text-lg">{title}</h3>
      <small className="px-2 text-gray-400 text-xs font-thin">{type} - {city}</small>
      <h4 className="px-2 pb-2 text-red-500 font-bold">${rent}/Month</h4>
      <div className="grid grid-cols-3 border-t border-gray-100">
        <div className="flex justify-center gap-1 py-3 border-r border-gray-100">
          <BiBed />
          <h5 className="text-xs">{bedrooms}</h5>
        </div>
        <div className="flex justify-center gap-1 py-3 border-r border-gray-100">
          <FaBath />
          <h5 className="text-xs">{bathrooms}</h5>
        </div>
        <div className="flex justify-center gap-1 py-3">
          <CgHashtag />
          <h5 className="text-xs">{size}</h5>
        </div>
      </div>
    </div>
  );
}
