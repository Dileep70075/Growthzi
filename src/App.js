import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import Register from './Register';
import Home1 from './Home1';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import FAQs from './FAQs';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials ';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Home1" element={<Home1 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
