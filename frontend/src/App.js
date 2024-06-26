import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/navbar';
import ServiceDetails from './components/services';
import Home from './components/home';
import ContactUs from './components/contact_us';
import WhatWeDo from './components/what_we_do';
import AboutUsPage from './components/about_us';
import Mission from './components/mission';
import PostJob from './components/postJobs';
import Jobs from './components/jobs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/we_do" element={<WhatWeDo />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/postjob" element={ <PostJob/>} />
          <Route path="/jobs" element={ <Jobs/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
