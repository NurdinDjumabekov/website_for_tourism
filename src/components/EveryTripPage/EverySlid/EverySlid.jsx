import React, { useState } from "react";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { listRecomTrips } from "../../../helpers/localData";
import { useDispatch, useSelector } from "react-redux";
import { createSingTrip } from "../../../store/reducers/requestSlice";
import SingTripUser from "../../SingTripUser/SingTripUser";

const EverySlid = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState();

  const { everyTrip } = useSelector((state) => state.requestSlice);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="EverySlid">
        <div className="container">
          <div className="mainContent">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="swiper"
              loop={true}
            >
              {everyTrip?.photos?.map((item) => (
                <SwiperSlide>
                  <div
                    className="everySlide"
                    style={{ backgroundImage: `url(${item})` }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="contentInner">
              <h5>{everyTrip?.title}</h5>
              <p>Дата тура: {everyTrip?.date}</p>
              {everyTrip?.discount ? (
                <p>Цена со скидкой: {everyTrip?.discount} сом</p>
              ) : (
                <p>Цена: {everyTrip?.price} сом</p>
              )}
              <p>Сложность тура: {everyTrip?.level}</p>
              <span>Описание : {everyTrip?.description}</span>
              <button onClick={() => setModal(true)}>Записаться на тур</button>
            </div>
          </div>
        </div>
      </div>
      <SingTripUser modal={modal} setModal={setModal} />
    </>
  );
};

export default EverySlid;
