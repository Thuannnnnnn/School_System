import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          
          <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
