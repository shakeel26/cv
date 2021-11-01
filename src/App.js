import * as React from 'react';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Language from './components/Language';
import Hobby from './components/Hobby';
import Divider from '@mui/material/Divider';
import './App.css';


const App = () => {
  return (
    <>
      <About />

      <Divider />

      <Education />

      <Divider />

      <Experience />

      <Divider />

      <Project />

      <Divider />

      <Skills />

      <Divider />

      <Language />

      <Divider />

      <Hobby />

    </>
  );
}
export default App;