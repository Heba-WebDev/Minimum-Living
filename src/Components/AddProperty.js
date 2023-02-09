import { useState, useRef, useEffect } from "react";
import UploadPreview from "./UploadPreview";
import ThankYou from './ThankYou';
import { motion } from "framer-motion";

export default function AddProperty() {
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


  const [disable, setDisable] = useState(false);
  const [add, setAdd] = useState(false);
  
//varabiale to use as condication for enabling or disabling the add property button 
  const formDataStrs = !newProperty.address || !newProperty.name || !newProperty.type || !newProperty.city;
  const formDataNums = !newProperty.price || !newProperty.unit;

  useEffect(() => {
   setDisable(formDataNums || formDataStrs || files.length === 0)
  },[newProperty, files, add, formDataNums, formDataStrs])

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
    const uploadedFiles = [...event.dataTransfer];
    setFiles((prev) => [...prev, ...uploadedFiles]);
  };

  const handleDeleteImage = (id, event) => {
    event.preventDefault();
    const filteredFiles = files.filter((file, index) => index !== id);
    setFiles(filteredFiles);
  };


 
  function handleAddProperty(event) {
   event.preventDefault();
    if(!disable) {
      setAdd(true);
      setFiles([]);
      setNewProperty({
        name: "",
        address: "",
        unit: 0,
        type: "",
        city: "",
        state: "",
        price: 0,
        description: "",
      });
    } else {
      setAdd(false);
    }
  }

  return (
    <motion.div 
    className="bg-gray-50"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="container mx-auto max-w-3xl md:w-3/4 py-12 grid">
        
        {!add ? <div className="bg-white py-5 px-3 rounded-xl drop-shadow-2xl">
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
                      const uploadedFiles = [...event.target.files];
                      setFiles((prev) => [...prev, ...uploadedFiles]);
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
             files.map((file, index) => (
        
            <UploadPreview key={index} file={file} id={index} handleDeleteImage={handleDeleteImage} />
                
              ))}


            <button className={disable ? "bg-red-100 text-white text-sm py-2 px-2 rounded w-4/5 mx-auto" : "bg-red-500 text-white text-sm py-2 px-2 rounded w-4/5 mx-auto"}
            disabled={disable} onClick={(event) => handleAddProperty(event)}>
              Add New Property
            </button>
          </form>
        </div>
        
        :
        <ThankYou setAdd={setAdd}/>
        }  
        
        
      </div>
    </motion.div>
  );
}
