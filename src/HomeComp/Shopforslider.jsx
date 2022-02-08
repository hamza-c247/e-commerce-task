import React from "react";
import { Link } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

function Shopforslider() {
  return (
    <>
      <section className="container home">
        <div className="swiper shop-for-slider">
          <h2>SHOP FOR</h2>
          <div className="swiper-wrapper shopbox-wrapper">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{
                clickable: true,
              }}
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
                <div className="swiper-slide shopbox">
                  <img src="/assets/images/products/smrtwtch.webp" alt="" />
                  <Link to="">Smart Watches</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img src="/assets/images/products/perf.webp" alt="" />
                  <Link to="">GEAR</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img src="/assets/images/products/pair.webp" alt="" />
                  <Link to="">Couple's </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img
                    src="/assets/images/products/essentials_titan-Women.webp"
                    alt=""
                  />
                  <Link to="">Women's</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img
                    src="/assets/images/products/essentials_titan-Men.webp"
                    alt=""
                  />
                  <Link to="">Men's</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img
                    src="/assets/images/products/essentials_titan-kids.webp"
                    alt=""
                  />
                  <Link to="">kid's</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img
                    src="/assets/images/products/essentials_titan-belt.webp"
                    alt=""
                  />
                  <Link to="">Belt's</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img
                    src="/assets/images/products/essentials_titan-wallClock.webp"
                    alt=""
                  />
                  <Link to="">Wallet's</Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide shopbox">
                  <img
                    src="/assets/images/products/essentials_titan-wallet.webp"
                    alt=""
                  />
                  <Link to="">Clock's</Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shopforslider;
