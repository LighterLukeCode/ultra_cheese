import styles from "./slider.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <h2 className={styles.title}>В акции участвуют</h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.slider__item}>
            <img src={slider1} alt="cheese1" />
            <span>Лёгкий, брусок</span>
            <span>180 г</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slider__item}>
            <img src={slider2} alt="cheese2" />
            <span>Лёгкий, слайсы</span>
            <span>120, 225 г</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slider__item}>
            <img src={slider3} alt="cheese3" />
            <span>Сливочный, брусок</span>
            <span>200, 300 г</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slider__item}>
            <img src={slider4} alt="cheese4" />
            <span>Сливочный, слайсы</span>
            <span>130, 250 г</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
