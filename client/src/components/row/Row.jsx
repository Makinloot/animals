import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../card/Card";
import "swiper/css";
import "swiper/css/navigation";
import "./Row.css";
export default function Row() {
  return (
    <div className="Row bg-neutral py-8">
      <div className="container">
        <div className="Row-wrapper">
          <h3 className="mb-2 font-helveticaCaps text-xl">VIP განცხადებები</h3>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={4.5}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
