import React from 'react';
import './App.css';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import resumeData from './Data/resumeData';
import workData from './Data/workData'
import testimonialData from './Data/testimonialData'


function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio workData={workData}/>
      <Testimonials testimonialData={testimonialData}/>
      <ContactUs resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default App;
