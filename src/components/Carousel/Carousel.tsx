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
    >
      {children}
    </Swiper>
  )
}

export default Carousel
