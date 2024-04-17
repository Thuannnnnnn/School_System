import React from "react";
import Login from "../hooks/TokenLogin";
import Header from "../component/Header";
import Footer from "../component/Footer";
function Home() {
  const { data, user } = Login("http://localhost:5000/Student/getAll");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {data.map((student) => (
          <div key={student.MaSV}>
            <h2>{student.St_Fullname}</h2>
          </div>
        ))}
        {user ? (
          <div>
            <p>Welcome</p>
            <p>Your role: {user.role}</p>
          </div>
        ) : (
          <p>Please log in</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
