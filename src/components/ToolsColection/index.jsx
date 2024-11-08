import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import "./styles.css";

import { Pagination } from "swiper/modules";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";
import ViewPageWrapper from "./ViewPageWrapper";

export default function ToolsColection({ dataSource }) {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperButtonPrev />
      <SwiperButtonNext />

      {dataSource.map((el) => {
        return (
          <SwiperSlide>
            <ViewPageWrapper slug={el.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
