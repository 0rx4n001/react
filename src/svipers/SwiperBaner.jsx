import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import { Keyboard, Scrollbar, Navigation, Pagination, EffectFade } from 'swiper/modules'; 
import styles from './swiperBaner.module.css'; 
import Baner from '../pages/home/baner/Baner'
import Baner2 from '../pages/home/baner2/Baner2';

export default function SwiperBaner() {
  return (
    <div className={styles.swiperContainer}> 
      <Swiper
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        navigation
        modules={[Keyboard, Scrollbar, Navigation, Pagination, EffectFade]} 
        className={styles.mySwiper} 
      >
        <SwiperSlide>
        <Baner/>
        </SwiperSlide>
        <SwiperSlide>
        <Baner2/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
