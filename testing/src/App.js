import React from 'react';
import {Article, Brand, Cta,Feature,Navbar} from './components';
import {Blog,Header, Footer,Possibility, FeatureCon,WhatGPT3} from './containers';
import './App.css';
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar/>
          <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <FeatureCon/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
