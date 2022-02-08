import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="Bannerswiper"
      >
        <SwiperSlide className="slide1">
          <div className="overlay" />
          <div className="heading-wrapper">
            <h1>FINEST OF FURNITURES</h1>
            <button>EXPLORE NOW</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <div className="overlay" />
          <div className="heading-wrapper">
            <h1>ACCESSORIES FOR DAILY USE</h1>
            <button>EXPLORE NOW</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide3">
          <div className="overlay" />
          <div className="heading-wrapper">
            <h1>HANDCRAFTED JEWELLERY</h1>
            <button>EXPLORE NOW</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
