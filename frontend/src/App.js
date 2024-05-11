import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/navbar';
import ServiceDetails from './components/services';
import Home from './components/home';
import ContactUs from './components/contact_us';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/contactus" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
