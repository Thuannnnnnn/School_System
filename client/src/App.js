import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listclass from './pages/Listclass';
import Signin from './pages/Signin';
import Score from './pages/Score';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/class_list" element={<Listclass />} />
        <Route path="/ScoreOfStudent/:MaSV" element={<Score />} />
      </Routes>
    </Router>
  );
}

export default App;
