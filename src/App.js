import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Product from './components/Product';



function App() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Product/>
    </div>
  );
}

export default App;
