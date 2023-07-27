/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Card.css";
import { FaHeart, FaUser } from "react-icons/fa";
export default function Card({
  isVip,
  authorType,
  description,
  price,
  images,
}) {
  return (
    <a
      href="#"
      className="Card block max-w-[280px] rounded-md border border-neutral-content/10 bg-neutral p-2"
    >
      <div className="Card-image relative">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {images?.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <img
                  className="h-full w-full rounded-md object-cover"
                  src={item.url}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isVip && (
          <div className="Card-vip absolute left-1 top-1 z-50 rounded-full bg-green-600 px-3">
            <span className="text-sm uppercase text-white">vip</span>
          </div>
        )}
      </div>
      <div className="Card-author-type flex items-center py-2 text-sm">
        <div className="rounded-full bg-base-content p-1 text-base-100">
          <FaUser size={10} />
        </div>
        <p className="ml-1 font-helveticaCaps">{authorType}</p>
      </div>
      <div className="Card-description mt-4">
        <p className="line-clamp-2">{description}</p>
        <hr className="border-1 my-2 rounded-full" />
        <div className="Card-price flex items-center justify-between py-2">
          <span>{price} ₾</span>
          <div className="flex items-center justify-center rounded-md bg-neutral-focus p-2 hover:bg-red-400 hover:text-base-100">
            <FaHeart size={14} />
          </div>
        </div>
      </div>
    </a>
  );
}
