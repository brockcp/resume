import React from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Foot from './components/Foot';
import Animation from './components/Animation';
import Sam from './components/Sam';

function App(){
  return(
    <div>
      <Nav />
      <Intro />
      <Sam />
      <About />
      <Works />
      <Foot />
    </div>
  )
}
export default App;
