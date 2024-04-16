import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listclass from './pages/Listclass';
import Signin from './pages/Signin';


function App() {
  return (
    <Router>




      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/class_list" element={<Listclass />} />

      </Routes>

    </Router>
  );
}

export default App;
