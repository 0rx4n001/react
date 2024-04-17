import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import { Keyboard, Scrollbar, Navigation, Pagination, EffectFade } from 'swiper/modules'; 
import styles from './svipcar.module.css'; 
import Baner from '../pages/home/baner/Baner';
import Baner2 from '../pages/home/baner2/Baner2';

export default function Svipcar({ items }) {
  return (
    <div className={styles.swiperContainer}> 
      <Swiper
        effect="fade"
        spaceBetween={30}
        slidesPerView={6}
        navigation
        modules={[Keyboard, Scrollbar, Navigation, Pagination]} 
        className={styles.mySwiper} 
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {item}
            <p className={styles.caption}>Bu bir söz</p> {/* Söz ekleniyor */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
