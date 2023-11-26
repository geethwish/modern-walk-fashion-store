import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

interface CarouselProps {
  children: JSX.Element[] | JSX.Element
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="mySwiper"
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {children}
    </Swiper>
  )
}

export default Carousel
