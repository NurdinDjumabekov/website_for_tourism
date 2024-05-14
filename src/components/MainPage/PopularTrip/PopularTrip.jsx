import React, { useEffect } from "react";
import "./style.scss";
import Title from "../../../common/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { getTripPopular } from "../../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";

const PopularTrip = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTripPopular());
  }, []);

  const { popularTrip } = useSelector((state) => state.requestSlice);

  return (
    <div className="popularTrip">
      <div className="container">
        <Title title={"Популярные туры"} size={700} />
        <Swiper
          slidesPerView={3}
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
          {popularTrip?.map((item) => (
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

export default PopularTrip;
