import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/navbar';

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
        <Navbar /> {/* Render the Navbar component */}
        <h1>Ocean Technologies</h1>
        <p>Your gateway to maritime industry jobs</p>
      </header>
      <main>
        <CarouselComponent />
        <section id="about" className="section">
          <h2>About Us</h2>
          <p>Add your About Us content here...</p>
        </section>
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Add your Contact Us content here...</p>
        </section>
        <section id="services" className="section">
          <h2>Services</h2>
          <p>Add your Services content here...</p>
        </section>
        <section id="industry" className="section">
          <h2>Industry</h2>
          <p>Add your Industry content here...</p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer>
        <p>&copy; 2024 Ocean Technologies. All rights reserved.</p>
      </footer>
    </div>
<BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;