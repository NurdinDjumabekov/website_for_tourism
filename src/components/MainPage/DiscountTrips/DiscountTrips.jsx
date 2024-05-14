import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Title from "../../../common/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { listTrips } from "../../../helpers/localData";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountTrip } from "../../../store/reducers/requestSlice";

const DiscountTrips = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscountTrip());
  }, []);

  const { discountTrip } = useSelector((state) => state.requestSlice);

  return (
    <div className="discountTrips">
      <div className="container">
        <Title title={"Туры со скидками"} size={1100} />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
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
          {discountTrip?.map((item) => (
            <SwiperSlide>
              <NavLink
                to={`every/${item?.id}`}
                className="everySlide"
                style={{ backgroundImage: `url(${item?.photo})` }}
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

export default DiscountTrips;
