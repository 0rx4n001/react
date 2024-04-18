import React from 'react'
import SwiperComponent from '../../svipers/SwiperBaner'
import Svipcar from '../../svipers/Svipcar'
import classNames from 'classnames';
// import styles from './header.module.css';

import c1 from './carusel_fotos/c1.jpeg';
import c2 from './carusel_fotos/c2.jpeg';
import c3 from './carusel_fotos/c3.jpeg';
import c4 from './carusel_fotos/c4.jpeg';
import c5 from './carusel_fotos/c5.jpeg';
import c6 from './carusel_fotos/c6.jpeg';
import c7 from './carusel_fotos/c7.jpeg';
import c8 from './carusel_fotos/c8.jpeg';
import c9 from './carusel_fotos/c9.jpeg';
import c10 from './carusel_fotos/c10.jpeg';
import c11 from './carusel_fotos/c11.jpeg';
import c12 from './carusel_fotos/c12.jpeg';

const Home = () => {
    const items = [
        <img src={c1} alt="Resim 1" />,
        <img src={c2} alt="Resim 1" />, 
        <img src={c3} alt="Resim 1" />,
        <img src={c4} alt="Resim 1" />,
        <img src={c5} alt="Resim 1" />,
        <img src={c6} alt="Resim 1" />,
        <img src={c7} alt="Resim 1" />,
        <img src={c8} alt="Resim 1" />,
        <img src={c9} alt="Resim 1" />,
        <img src={c10} alt="Resim 1" />,
        <img src={c11} alt="Resim 1" />,
        <img src={c12} alt="Resim 1" />,
      ];
  return (
    <div>
     <SwiperComponent/>
     {/* <Svipcar  items={items}/> */}
    </div>
  )
}

export default Home
