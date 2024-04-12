import React, { useState, useEffect } from "react";

function TableclassList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const isOnlyOnePage = Math.ceil(filteredData.length / itemsPerPage) === 1;

  useEffect(() => {
    const filtered = data.filter((classItem) => {
      setCurrentPage(1);
      return classItem.Cl_Name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div className="flex flex-row justify-end w-full mb-1 sm:mb-0">
          {" "}
          <div className="">
            <div className=" relative ">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                id="form-subscribe-Filter"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="name"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Class Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Teacher
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((classItem) => (
                  <tr key={classItem.Cl_Id}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {classItem.Cl_Name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {classItem.Number_of_Students}
                      </p>
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {classItem.Te_Name}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!isOnlyOnePage && (
              <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl ${
                      currentPage === 1 && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={currentPage === 1}
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  {Array.from({
                    length: Math.ceil(data.length / itemsPerPage),
                  }).map((page, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-full px-4 py-2 text-base ${
                        currentPage === index + 1
                          ? "text-indigo-500 bg-white border-t border-b"
                          : "text-gray-600 bg-white border"
                      } hover:bg-gray-100`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className={`w-full p-4 text-base text-gray-600 bg-white border rounded-r-xl ${
                      currentPage === Math.ceil(data.length / itemsPerPage) &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={
                      currentPage === Math.ceil(data.length / itemsPerPage)
                    }
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      class=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableclassList;
