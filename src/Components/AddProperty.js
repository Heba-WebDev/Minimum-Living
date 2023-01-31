import { useState, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function AddProperty() {
  const [readyToAdd, setReadyToAdd] = useState(false);
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const [newProperty, setNewProperty] = useState({
    name: "",
    address: "",
    unit: 0,
    type: "",
    city: "",
    state: "",
    price: 0,
    description: "",
  });

  const handleAddNewPropertyForm = (event) => {
    setNewProperty((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.toStringfy());
    setFiles(event.dataTransfer);
  };

  const handleDeleteImage = (id, event) => {
    event.preventDefault();
  };

  const handleAddingNewProperty = () => {
    let allFieldesFilled = null;

    for (let item in newProperty) {
      if (newProperty[item] === "" || newProperty[item] === 0)
        allFieldesFilled = false;
    }
    setReadyToAdd(allFieldesFilled && files ? true : false);
  };

  return (
    <articale className="bg-gray-50">
      <div className="container mx-auto max-w-3xl md:w-3/4 py-12 grid">
        <div className="bg-white py-5 px-3 rounded-xl drop-shadow-2xl">
          <h4 className="text-red-500 font-bold text-center py-3">
            Add A New Property
          </h4>

          <form className="grid gap-4">
            <div className="grid md:grid-cols-3 gap-3 pt-4">
              <div className="flex flex-col gap-1">
                <label>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={newProperty.name}
                  onChange={handleAddNewPropertyForm}
                  placeholder="Enter Name"
                  className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={newProperty.address}
                  onChange={handleAddNewPropertyForm}
                  placeholder="Enter Address"
                  className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>
                  Unit Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="unit"
                  value={newProperty.unit}
                  onChange={handleAddNewPropertyForm}
                  placeholder="Enter Unit"
                  className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-2 pt-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </label>

                <select
                  id="city"
                  name="city"
                  value={newProperty.city}
                  onChange={handleAddNewPropertyForm}
                  className="bg-gray-50 border border-solid border-gray-200
                       px-2 py-2 rounded text-xs font-extralight text-gray-400 "
                >
                  <option value="" className="">
                    Select City
                  </option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharjah">Sharjah</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="state">
                  Select<span className="text-red-500 px-1">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={newProperty.state}
                  onChange={handleAddNewPropertyForm}
                  className="bg-gray-50 border border-solid border-gray-200
                       px-2 py-2 rounded text-xs font-extralight text-gray-400 "
                >
                  <option value="">Select State</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharjah">Sharjah</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="type">
                  Type<span className="text-red-500 px-1">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={newProperty.type}
                  onChange={handleAddNewPropertyForm}
                  className="bg-gray-50 border border-solid border-gray-200
                       px-2 py-2 rounded text-xs font-extralight text-gray-400 "
                >
                  <option value="">Select Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
            </div>

            <div className="grid  gap-2 pt-2">
              <div className="flex flex-col gap-1">
                <label>
                  Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProperty.price}
                  onChange={handleAddNewPropertyForm}
                  placeholder="Enter Price"
                  className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"
                />
              </div>
            </div>

            <div className="grid pt-2">
              <div className="flex flex-col gap-1">
                <label>
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newProperty.description}
                  onChange={handleAddNewPropertyForm}
                  rows={6}
                  className="resize-none rounded-md bg-gray-100 row-span-3
                        border border-gray-200 border-solid"
                ></textarea>
              </div>
            </div>

            <div
              className="flex flex-col pt-4 p-4 bg-red-50 justify-items-center border border-dashed border-red-500"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="grid justify-center">
                <small>
                  Drag your images here, or
                  <input
                    type="file"
                    multiple
                    onChange={(event) => {
                      setFiles(event.target.files);
                    }}
                    hidden
                    accept="image/png, image/jpeg, image/jpg"
                    ref={inputRef}
                  />
                  <button
                    className="text-red-500 pl-1"
                    onClick={(event) => {
                      event.preventDefault();
                      inputRef.current.click();
                    }}
                  >
                    {" "}
                    browse
                  </button>
                </small>
                <small className="text-gray-300 text-center">
                  Supported: JPG, JPEG, PNG
                </small>
              </div>
            </div>
            {files &&
              Array.from(files).map((file, id) => (
                <div key={id}>
                  <div className="flex justify-between items-center bg-red-50 p-2">
                    <div className="flex gap-2 items-center">
                      <img src={URL.createObjectURL(file)} className="w-8" />
                      <p className="text-xs text-gray-400">{file.name}</p>
                    </div>
                    <div>
                      <button
                        className="flex items-center"
                        onClick={(event) => {
                          handleDeleteImage(id, event);
                        }}
                      >
                        <AiFillDelete className="text-red-500" size="19" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            <button className="bg-red-500 text-white text-sm py-2 px-2 rounded w-4/5 mx-auto">
              Add New Property
            </button>
          </form>
        </div>
      </div>
    </articale>
  );
}
