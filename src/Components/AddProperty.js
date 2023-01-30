import { useState, useRef } from "react";

export default function AddProperty() {

    const[files, setFiles] = useState([]);
    const inputRef = useRef();
    const handleDragOver = (event) => {
        event.preventDefault();
      };
   const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer);
   };

   
    return (
        <div className="bg-gray-50">

        
        <div className="container mx-auto max-w-3xl md:w-3/4 py-12 grid">
            
         <h3 className="break-word md:break-normal pb-2">Your property with us and be Confident that Your Room will be Filled Out!</h3>
           
         <div className="bg-white py-5 px-3 rounded-xl drop-shadow-2xl">

            <h4 className="text-red-500 font-bold text-center py-3">Add A New Property</h4>

            <form className="grid gap-4">
                <div className="grid md:grid-cols-3 gap-3 pt-4">
                    <div className="flex flex-col gap-1">
                        <label>Name <span className="text-red-500">*</span></label>
                        <input type='text' placeholder="Enter Name" className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Address <span className="text-red-500">*</span></label>
                        <input type='text' placeholder="Enter Address" className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Unit Number <span className="text-red-500">*</span></label>
                        <input type='text' placeholder="Enter Unit" className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"/>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-2 pt-1">
                    <div className="flex flex-col gap-1">
                    <label htmlFor="city">City  <span className="text-red-500">*</span></label>
                      
                      <select id="city" className="bg-gray-50 border border-solid border-gray-200
                       px-2 py-2 rounded text-xs font-extralight text-gray-400 ">
                      <option value="" className="">Select City</option>
                      <option value="sanjose">San Jose</option>
                      <option value="oakland">Oakland</option>
                      <option value="silliconvalley">Silicon Valley</option>
                      </select>
                      
                    </div>

                    <div className="flex flex-col gap-1">
                    <label htmlFor="state">Select<span className="text-red-500 px-1">*</span></label>
                      <select id="state" className="bg-gray-50 border border-solid border-gray-200
                       px-2 py-2 rounded text-xs font-extralight text-gray-400 ">
                      <option value="">Select State</option>
                      <option value="sanjose">San Jose</option>
                      <option value="oakland">Oakland</option>
                      <option value="silliconvalley">Silicon Valley</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                    <label htmlFor="room">Room Type<span className="text-red-500 px-1">*</span></label>
                      <select id="room" className="bg-gray-50 border border-solid border-gray-200
                       px-2 py-2 rounded text-xs font-extralight text-gray-400 ">
                      <option value="">Select Room Type</option>
                      <option value="sanjose">San Jose</option>
                      <option value="oakland">Oakland</option>
                      <option value="silliconvalley">Silicon Valley</option>
                      </select>
                    </div>
                </div>

                <div className="grid  gap-2 pt-2">
                <div className="flex flex-col gap-1">
                        <label>Price <span className="text-red-500">*</span></label>
                        <input type='number' placeholder="Enter Price" className="bg-gray-50 p-1 rounded 
                        border border-solid border-gray-200 placeholder:text-xs placeholder:p-2"/>
                    </div>
        
                </div>

                <div className="grid pt-2">
                        <div className="flex flex-col gap-1">
                        <label>Description <span className="text-red-500">*</span></label>
                        <textarea rows={6} className="resize-none rounded-md bg-gray-100 row-span-3
                        border border-gray-200 border-solid"></textarea>
                        </div>
                </div>

                <div className="flex flex-col pt-4 p-4 bg-red-50 justify-items-center border border-dashed border-red-500"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}>
                        <div className="grid justify-center">
                         <small>Drag your images here, or 
                            <input 
                            type="file"
                             multiple
                             onChange={(event) => setFiles(event.target.files)}
                             hidden
                             accept="image/png, image/jpeg, image/jpg"
                             ref={inputRef}
                             />
                              <button className="text-red-500 pl-1"
                              onClick={(event) => {
                                event.preventDefault();
                                inputRef.current.click();
                              }}> browse</button>
                             </small>
                         <small className="text-gray-300 text-center">Supported:  JPG, JPEG, PNG</small>
                        </div>
                </div>
            {files && Array.from(files).map((file, id) => 
        <div key={id}>
        <img src={URL.createObjectURL(file)} />
        </div>
    )}
                <button className="bg-red-500 text-white text-sm py-2 px-2 rounded w-4/5 mx-auto">Add New Property</button>
            </form>
        </div>  
        </div>
        
        </div>
    )
}