import React from 'react';

import './App.scss';
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work'
import History from './components/History'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import skillsList from './assets/data/skills-list'
import workList from './assets/data/work-list'




function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <History />
      <Work data={workList}/>
      <Skills data={skillsList} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
