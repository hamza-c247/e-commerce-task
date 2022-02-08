import React from "react";
import { Link } from "react-router-dom"
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

// import Swiper core and required modules

// install Swiper modules

function Topsellerslider() {
  return (
    <>
      <section className="container home">
        <div className="swiper top-seller-slider">
          <h2 className="heading-top-seller">Top Sellers</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              450: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              991: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            classNameName="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts7.webp" alt="" />
                <Link to="">Lusture</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts8.webp" alt="" />
                <Link to="">Gear</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts10.webp" alt="" />
                <Link to="">Nebula </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts2.webp" alt="" />
                <Link to="">Titan</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts9.webp" alt="" />
                <Link to="">Edge</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts10.webp" alt="" />
                <Link to="">Stride</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts12.webp" alt="" />
                <Link to="">Workwear</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts4.webp" alt="" />
                <Link to="">Metallic</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tsbox">
                <img src="/assets/images/products/ts13.webp" alt="" />
                <Link to="">Workwear</Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Topsellerslider;
