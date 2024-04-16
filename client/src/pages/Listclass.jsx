import React, { useState, useEffect } from "react";
import TableclassList from "../component/tableClassList";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

function Listclass() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/class/getClassList`;
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TableclassList data={data} />
      </main>
      <Footer />
    </div>
  );
}

export default Listclass;
