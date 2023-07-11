import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = () => {
  return (
    <div className="slider-main">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ padding: "20px", display: "flex" }}
      >
        <SwiperSlide
          style={{ display: "flex", justifyContent: "center" }}
          className="slider-body"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/social-media-2-0.appspot.com/o/images%2Ffour-min.JPG?alt=media&token=ad0aace8-0686-4ef8-8852-6e3fb4867c72"
            alt=""
            style={{
              width: "fit-content",
              height: "40vh",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/social-media-2-0.appspot.com/o/images%2Fone-min.JPG?alt=media&token=c5e88727-c810-42d9-886f-9953073ec654"
            alt=""
            style={{
              width: "fit-content",
              height: "40vh",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/social-media-2-0.appspot.com/o/images%2Ftwo.JPG?alt=media&token=059ccf95-ede1-4787-a833-caaec8e56a91"
            alt=""
            style={{
              width: "25vw",
              height: "30vh",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "25vw",
              height: "30vh",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "25vw",
              height: "30vh",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "20vw",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "20vw",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "20vw",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "20vw",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "20vw",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://picsum.photos/200"
            alt=""
            style={{
              width: "20vw",
              backgroundColor: "red",
              borderRadius: "20px",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
