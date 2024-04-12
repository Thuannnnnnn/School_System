import React, { useState, useEffect } from "react";
import TableclassList from "../component/tableClassList";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

function Listclass() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/class/getClassList`
    );
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((classItem) => {
      return classItem.Cl_Name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="w-3/4 flex justify-end mt-10">
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
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Filter
          </button>
        </div>
        <TableclassList data={filteredData} />
      </main>
      <Footer />
    </div>
  );
}

export default Listclass;
