import { useState } from "react";


export default function Pagination({currentPage, setCurrentPage, pages}) {

    const pagesArr = [...Array(pages + 1).keys()].slice(1);
    const [disablePrevious, setDisablePrevious] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    function handlePreviousBtn() {
        if(currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            setDisablePrevious(false);
        }else {
            setDisablePrevious(true);
        }
        
    }

    function handleNextBtn(){
        if(currentPage < pages) {
            setCurrentPage(prev => prev + 1);
        }
        handlePrevNextBtns();
    }


    function handlePrevNextBtns(pageNumber) {
      if(pageNumber > 1 && pageNumber < pages) {
            setDisablePrevious(false);
            setDisableNext(false);
        }else if(pageNumber > 1 && pageNumber >= pages) {
            setDisablePrevious(false);
            setDisableNext(true);
        }else if(currentPage === 1){
            setDisablePrevious(true);
            setDisableNext(false);
        }
    }

  

    return (
        <>
        <ul className="flex justifiy-center cursor-pointer bg-white w-min lg:w-min
         mx-auto border border-gray-200 border-solid rounded-lg">
               <li className={`${disablePrevious ? "bg-gray-50 text-gray-300" : "bg-white text-red-500"} border-r border-r-gray-300 p-1`}>
                    <button onClick={handlePreviousBtn} className="px-1 lg:px-4 w-full">
                        Previous
                    </button>
                </li>
                
              
            {pagesArr.map((pageNumber, index) => (
                <li key={pageNumber} className={`${currentPage === index+1 ? "bg-red-500" : "bg-white"} flex justifiy-center border-r border-r-gray-300`}>
                    <button onClick={() => {
                        setCurrentPage(pageNumber)}
                       
                        
                        
                       
                    } className={`${currentPage === index+1 ? "text-white mx-auto" 
                    : " text-red-500 mx-auto"} w-full text-center w-full px-6 p-1`}>
                       {pageNumber}
                    </button>
                </li>
            ))}
            <li className={`  ${disableNext ? "bg-gray-400" : "bg-white"} p-1`}>
                    <button onClick={handleNextBtn} className={`${disableNext ? "bg-gray-300 text-gray-500" : "bg-white text-red-500"} w-full px-2 lg:px-4`}>
                        Next
                    </button>
                </li>
        </ul>
        </>
    )
}