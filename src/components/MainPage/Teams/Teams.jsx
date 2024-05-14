import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Title from "../../../common/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { listGids } from "../../../helpers/localData";
import { useDispatch, useSelector } from "react-redux";
import { getOurGids } from "../../../store/reducers/requestSlice";

const Teams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOurGids());
  }, []);

  const { ourGids } = useSelector((state) => state.requestSlice);

  return (
    <div className="teams">
      <div className="container">
        <h3>Наши гиды</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
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
          {ourGids?.map((item) => (
            <SwiperSlide>
              <div
                className="everySlide"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="texts">
                  <h5>{item?.name}</h5>
                  <p>{item?.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Teams;
