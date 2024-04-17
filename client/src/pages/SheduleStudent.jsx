import React, { useState, useEffect } from "react";
import Schedule from "../component/schdule";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

function ScheduleStudent() {
  const [data, setData] = useState([]);
  const [studentId, setStudentId] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/Schedule/getStudent/${studentId}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  useEffect(() => {
    if (studentId) {
      fetchData();
    }
  }, [studentId]);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">
        <Schedule data={data} />
      </main>
      <Footer />
    </div>
  );
}

export default ScheduleStudent;
