import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import styles from "./carouselSwiper.module.css";

const CarouselSwiper = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6;
  const itemWidth = 120;

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % (items.length - visibleItems + 1);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + (items.length - visibleItems + 1)) % (items.length - visibleItems + 1);
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselButton} onClick={prevSlide}>
        Previous
      </div>
      <div className={styles.carouselWrapper}>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.carouselButton} onClick={nextSlide}>
        Next
      </div>
    </div>
  );
};

export default CarouselSwiper;