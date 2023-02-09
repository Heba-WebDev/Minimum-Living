export default function Pagination({ currentPage, setCurrentPage, pages }) {
  const pagesArr = [...Array(pages + 1).keys()].slice(1);
  function handlePreviousBtn() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function handleNextBtn() {
    if (currentPage < pages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  return (
    <>
      <ul
        className="flex justifiy-center cursor-pointer bg-white w-min lg:w-min
         mx-auto border border-gray-200 border-solid rounded-lg"
      >
        <li
          className={`${
            currentPage === 1
              ? "bg-gray-50 text-gray-300"
              : "bg-white text-red-500"
          } border-r border-r-gray-300 p-1`}
        >
          <button onClick={handlePreviousBtn} className="px-1 lg:px-4 w-full">
            Previous
          </button>
        </li>

        {pagesArr.map((pageNumber, index) => (
          <li
            key={pageNumber}
            className={`${
              currentPage === index + 1 ? "bg-red-500" : "bg-white"
            } flex justifiy-center border-r border-r-gray-300`}
          >
            <button
              onClick={() => {
                setCurrentPage(pageNumber);
              }}
              className={`${
                currentPage === index + 1
                  ? "text-white mx-auto"
                  : " text-red-500 mx-auto"
              } w-full text-center w-full px-3 lg:px-6 p-1`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li
          className={`${
            currentPage === pages
              ? "bg-gray-50 text-gray-300"
              : "bg-white text-red-500"
          } border-r border-r-gray-300 p-1`}
        >
          <button onClick={handleNextBtn} className="px-1 lg:px-4 w-full">
            Next
          </button>
        </li>
      </ul>
    </>
  );
}
