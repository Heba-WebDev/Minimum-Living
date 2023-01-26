import { useState } from "react";


export default function Pagination({currentPage, setCurrentPage, pages}) {

    const pagesArr = [...Array(pages + 1).keys()].slice(1);
    const [disablePrevious, setDisableFirst] = useState(true);
    const [disableNext, setDisableLast] = useState(false);
    function handlePreviousBtn() {
        if(currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    }

    function handleNextBtn(){
        if(currentPage < pages) {
            setCurrentPage(prev => prev + 1);
        }
    }

    return (
        <>
        <ul className="flex justify-center gap-8 bg-white w-min mx-auto border border-gray-200 border-solid rounded-lg">
               <li className="border-r border-r-gray-300 p-1">
                    <a onClick={handlePreviousBtn}>
                        Previous
                    </a>
                </li>
            {pagesArr.map((pageNumber, index) => (
                <li key={pageNumber} className="border-r border-r-gray-300 p-1 flex border border-pink-200 border-solid w-full">
                    <a onClick={() => {
                        setCurrentPage(pageNumber)}
                       
                        
                        
                       
                    } className="border border-pink-200 border-solid">
                        {pageNumber}
                    </a>
                </li>
            ))}
            <li className={`  ${disableNext ? "bg-gray-400 p-1" : "p-1"}`}>
                    <a onClick={handleNextBtn}>
                        Next
                    </a>
                </li>
        </ul>
        </>
    )
}