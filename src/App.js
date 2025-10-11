import './App.css';
import React from 'react' 
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/NavBar';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
