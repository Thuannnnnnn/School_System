import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './pages/Signin';

function App() {
  return (
    <Router>




      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>

    </Router>
  );
}

export default App;
