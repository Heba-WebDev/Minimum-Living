import Rectangle1 from "../Assets/Images/Rectangle 1.png";
import magnifyingglass from "../Assets/Images/magnifyingglass.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [error, SetError] = useState(false);
  const navigate = useNavigate();

  const [searchProperty, setSearchProperty] = useState({
    type: "",
    city: "",
  });

  function handleChange(event) {
    setSearchProperty((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSearchProperty(event) {
    event.preventDefault();
    searchProperty.type && searchProperty.city
      ? navigate("/search", {
          state: {
            type: searchProperty.type,
            city: searchProperty.city,
          },
        })
      : SetError(true);
  }

  function handleFocus() {
    SetError(false);
  }

  return (
    <article
      className="container mx-auto md:max-w-3xl lg:max-w-5xl md:w-3/4 py-2 px-4 items-center 
         justify-between grid grid-cols-16 gap-4 py-12"
    >
      <div>
        <h1
          className="text-white text-center md:text-left 
        text-4xl lg:text-5xl antialiased font-bold"
        >
          The most affortable place to stay in the san franciso bay area.
        </h1>
      </div>

      <div className="object-fill max-w-xs mx-auto grid gap-3 border-gray-300">
        <img src={Rectangle1} alt="" className="rounded-xl" />

        <div className="px-[8px]  md:px-2 lg:px-4 py-2 md:py-3 bg-white rounded">
          <form className="grid grid-cols-20 border border-solid border-gray-300">
            <div className="bg-gray-100 border-r border-gray-300 px-1">
              <label htmlFor="type">
                <span className="sr-only">Select a property</span>
              </label>
              <select
                id="type"
                name="type"
                value={searchProperty.type}
                onChange={handleChange}
                onFocus={handleFocus}
                className="bg-gray-100 w-full"
              >
                <option value="">Properties</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>

            <div className="bg-gray-100 px-1">
              <label htmlFor="city">
                <span className="sr-only">Select a city</span>
              </label>

              <select
                id="city"
                name="city"
                value={searchProperty.city}
                onChange={handleChange}
                onFocus={handleFocus}
                className="bg-gray-100 w-full"
              >
                <option value="">City</option>
                <option value="Dubai">Dubai</option>
                <option value="Abudhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
              </select>
            </div>
            <button
              onClick={handleSearchProperty}
              className="bg-blue-400 w-full flex justify-center items-center"
            >
              <img src={magnifyingglass} alt="" className="w-5" />
            </button>
          </form>
          {error && (
            <small className="text-red-500 flex justify-center pt-2">
              Please choose a property type and a city!
            </small>
          )}
        </div>
      </div>
    </article>
  );
}
