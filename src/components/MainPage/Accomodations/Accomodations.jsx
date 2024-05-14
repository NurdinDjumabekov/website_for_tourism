import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Title from "../../../common/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  infoRoom,
  listTransports,
  listTrips,
} from "../../../helpers/localData";
import { useDispatch, useSelector } from "react-redux";
import { getTrasportList } from "../../../store/reducers/requestSlice";

const Accomodations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrasportList());
  }, []);

  const { trasportList } = useSelector((state) => state.requestSlice);

  return (
    <div className="accomodations">
      <div className="container">
        <div className="accomodations__transport">
          <h3>Транспорт</h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper"
            loop={true}
          >
            {trasportList?.map((item) => (
              <SwiperSlide>
                <div className="everySlide">
                  <img src={item.img} alt="" />
                  <div className="texts">
                    <h5>{item.name}</h5>
                    <p>{item?.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="accomodations__rooms">
          <h3>Условия проживания</h3>

          <div className="info">
            <img
              src="https://loukoster.com/wp-content/uploads/2020/10/gde-otdokhnut-vnukovo.jpg"
              alt="room "
            />
            <p>{infoRoom}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodations;
