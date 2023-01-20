import {BiBed} from 'react-icons/bi';
import {FaBath} from 'react-icons/fa';
import {CgHashtag} from 'react-icons/cg';




export default function Property({photo, title, type, rent, bed, bath, rooms}) {

    return(
        <div className="bg-white rounded-xl grid">
            <img src={photo} className='rounded-t-xl'/>
            <h3 className='py-2 px-2 text-sm md:text-lg'>{title}</h3>
            <small className='px-2 text-gray-400 text-xs'>{type}</small>
            <h4 className='px-2 pb-2 text-red-500 font-bold'>{rent}</h4>
            <div className='grid grid-cols-3 border-t border-gray-100'>
            <div className='flex justify-center gap-1 py-3 border-r border-gray-100'>
              <BiBed />
              <small>{bed}</small>
            </div>
            <div className='flex justify-center gap-1 py-3 border-r border-gray-100'>
              <FaBath />
              <small>{bath}</small>
            </div>
            <div className='flex justify-center gap-1 py-3'>
              <CgHashtag />
              <small>{rooms}</small>
            </div>
            </div>
        </div>
    )

}