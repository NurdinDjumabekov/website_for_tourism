import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Title from "../../../common/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLastWeekTrip } from "../../../store/reducers/requestSlice";

const LastWeekTrips = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastWeekTrip());
  }, []);

  const { lastWeekTrip } = useSelector((state) => state.requestSlice);

  console.log(lastWeekTrip, "lastWeekTrip");

  return (
    <div className="lastWeekTrips">
      <div className="container">
        <Title title={"Туры на следующую неделю"} size={1100} />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper"
          loop={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            670: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }}
        >
          {lastWeekTrip?.map((item) => (
            <SwiperSlide>
              <NavLink
                className="everySlide"
                style={{ backgroundImage: `url(${item?.photo})` }}
                to={`every/${item?.id}`}
              >
                <h4>{item?.date}</h4>
                <div>
                  <h5>{item?.title}</h5>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LastWeekTrips;
