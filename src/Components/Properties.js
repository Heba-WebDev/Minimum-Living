
import Property from "./Property";
import unsplashEhIt1hg4Hs from '../Assets/Images/unsplashEhIt1hg4Hs.png';
import unsplash2d4lAQAlbDA from '../Assets/Images/unsplash2d4lAQAlbDA.png';
import unsplashuDtC1NLEzU from '../Assets/Images/unsplashuDtC1NLEzU.png';
import unsplashKQgrVfR3r74 from '../Assets/Images/unsplashKQgrVfR3r74.png';
import unsplashT6d96Qrb5MY from '../Assets/Images/unsplashT6d96Qrb5MY.png';

export default function Properties() {

    return (
        <div className="bg-slate-50">
        <div className="grid container mx-auto max-w-3xl md:w-3/4 py-12">
        
        <div className="flex justify-between items-center">
            <h2 className="text-black font-bold text-xl md:text-2xl">list of properties</h2>
            <button className="bg-red-500 text-white text-sm p-1 md:p-2  rounded">View All Property</button>
        </div>

        <div className="grid grid-cols-18 md:grid-cols-19 gap-5 justify-between py-8">
           <Property 
           photo={unsplashEhIt1hg4Hs}
           title="2578 Folsom street, san francisco, CA, 94110" 
           type="Private Room"
           rent="$1200/month"
           bed="4"
           bath="2"
           rooms="2"
           />
             <Property 
             photo={unsplash2d4lAQAlbDA}
           title="2578 Folsom street, san francisco, CA, 94110" 
           type="Private Room"
           rent="$1200/month"
           bed="4"
           bath="2"
           rooms="2"
           />
             <Property 
             photo={unsplashT6d96Qrb5MY}
           title="2578 Folsom street, san francisco, CA, 94110" 
           type="Private Room"
           rent="$1200/month"
           bed="4"
           bath="2"
           rooms="2"
           />
             <Property 
             photo={unsplashKQgrVfR3r74}
           title="2578 Folsom street, san francisco, CA, 94110" 
           type="Private Room"
           rent="$1200/month"
           bed="4"
           bath="2"
           rooms="2"
           />
             <Property 
             photo={unsplashKQgrVfR3r74}
           title="2578 Folsom street, san francisco, CA, 94110" 
           type="Private Room"
           rent="$1200/month"
           bed="4"
           bath="2"
           rooms="2"
           />
             <Property 
             photo={unsplashuDtC1NLEzU}
           title="2578 Folsom street, san francisco, CA, 94110" 
           type="Private Room"
           rent="$1200/month"
           bed="4"
           bath="2"
           rooms="2"
           />
        </div>
        
        <div className="grid grid-cols-5 border border-gray-300 border-solid w-72 mx-auto
        rounded">
       <button className="flex justifiy-center border-r border-gray-300 p-2">First</button>
       <button className="border-r border-gray-300 p-2">1</button>
       <button className="border-r border-gray-300 p-2">2</button>
       <button className="border-r border-gray-300 p-2">3</button>
       <button className="p-2">Next</button>
        </div>
        </div>
        </div>
    )

}