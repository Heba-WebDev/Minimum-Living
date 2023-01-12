import Rectangle1 from "../Assets/Images/Rectangle 1.png";
import magnifyingglass from "../Assets/Images/magnifyingglass.png";
export default function Hero() {
  return (
    <div
      className="container mx-auto max-w-3xl md:w-3/4 py-2 px-4 flex flex-wrap items-center 
         justify-between grid grid-cols-16 gap-4 py-12">

      <div className="flex self-center">
        <h1
          className="text-white text-center md:text-left 
        text-5xl lg:text-5xl antialiased font-bold"
        >
          The most affortable place to stay in the san franciso bay area.
        </h1>
      </div>

      <div className="object-fill max-w-xs mx-auto grid gap-3 border-gray-300">

        <img src={Rectangle1} className="rounded-xl" />
        
        <div className="px-4 px-2 lg:px-4 py-3 bg-white rounded-xl">
          <form className="grid grid-cols-20 border border-solid border-gray-300">
            <div className="bg-gray-100 border-r border-gray-300">
              <label htmlFor="types"></label>
              <select id="types" className="bg-gray-100">
                <option value="">All types</option>
                <option value="room">Room</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <div className="bg-gray-100">
              <label htmlFor="neighborhood"></label>
              <select id="neighborhood" className="bg-gray-100">
                <option value="">Neighborhood</option>
                <option value="sanjose">San Jose</option>
                <option value="oakland">Oakland</option>
                <option value="silliconvalley">Silicon Valley</option>
              </select>
            </div>
            <button className="bg-blue-400 w-full flex justify-center items-center">
              <img src={magnifyingglass} className='w-5'/>
            </button>
          </form>
        </div>

      </div>


    </div>
  );
}
