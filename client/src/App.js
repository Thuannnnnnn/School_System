import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
