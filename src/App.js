import React from 'react';
import './App.css';

import {Navbar,Footer}  from "./components";
import {Header,Welcome,Services,Subscribe,About,Reviews,Blog,Collabs} from './containers';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Welcome/>
      <Services/>
      <Subscribe/>
      <About/>
      <Reviews/>
      <Blog/>
      <Collabs/>
      <Footer/>
    </div>
  );
}

export default App;
{/*

*/}