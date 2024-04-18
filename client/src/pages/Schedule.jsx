import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

function Schdule() {
  const [data, setData] = useState([]);
  const [studentId, setStudentId] = useState("");

  const getData = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/Schedule/${studentId}`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  useEffect(() => {
    if (studentId) {
      getData();
    }
  }, [studentId]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {data && data.length > 0 ? (
          data.map((scheduleItem, index) => (
            <div key={index}>
              <p>Date Begin: {scheduleItem.Sc_DateBegin}</p>
              <p>Date End: {scheduleItem.Sc_DateEnd}</p>
            </div>
          ))
        ) : (
          <p>No schedule data available</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Schdule;
