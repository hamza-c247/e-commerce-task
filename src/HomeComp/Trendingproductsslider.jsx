import React from "react";
import { Link } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

// import Swiper core and required modules

// install Swiper modules
function Trendingproductsslider() {
  return (
    <>
      <section className="container home">
        <div className="swiper trending-product-slider">
          <h2 className="heading-trending-products">Trending Products</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            
            
           
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
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp1.webp" alt="" />
                <Link to="">Lusture</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp2.webp" alt="" />
                <Link to="">Gear</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp5.webp" alt="" />
                <Link to="">Nebula </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp4.webp" alt="" />
                <Link to="">Titan</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp13.webp" alt="" />
                <Link to="">Planet</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp14.webp" alt="" />
                <Link to="">Swiss</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp7.webp" alt="" />
                <Link to="">Korc</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp8.webp" alt="" />
                <Link to="">Banger</Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide tpbox">
                <img src="/assets/images/products/tp9.webp" alt="" />
                <Link to="">Edge</Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Trendingproductsslider;
