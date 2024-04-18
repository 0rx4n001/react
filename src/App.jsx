
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/home/Home';
// import About from './pages/about/About';
// import Header from './main/header/Header';
// // import Baner from '../../pages/home/baner/Baner'
// import Footer from './main/footer/Footer'

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import { useState } from 'react'
import './App.css'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './main/header/Header';
import Footer from './main/footer/Footer'
import Home from './pages/home/Home'
import ProductList from './pages/shop/ProductList.jsx'


function App() {
  return (
<>
<Header />
<Home/>
<ProductList />
<Footer />
</>
  )
}

export default App
