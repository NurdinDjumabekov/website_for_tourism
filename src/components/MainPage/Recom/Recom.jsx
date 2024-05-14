import React, { useEffect, useState } from "react";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { listRecomTrips } from "../../../helpers/localData";
import AddUserLocation from "../../AddUserLocation/AddUserLocation";
import { useDispatch, useSelector } from "react-redux";
import { getUserTrip } from "../../../store/reducers/requestSlice";

const Recom = () => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getUserTrip());
  };

  useEffect(() => getData(), []);

  const { userTrip } = useSelector((state) => state.requestSlice);

  return (
    <>
      <div className="recom">
        <div className="container">
          <h3>Хотите съездить куда-то, а этой локации у нас нет?</h3>
          <h3>Добавьте новую локацию сами!</h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
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
            {userTrip?.map((item) => (
              <SwiperSlide>
                <div
                  className="everySlide"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="texts">
                    <h5>{item?.title}</h5>
                    {/* <p>{item?.description}</p> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={() => setModal(true)}>Добавить новую локацию</button>
        </div>
      </div>
      <AddUserLocation modal={modal} setModal={setModal} getData={getData} />
    </>
  );
};

export default Recom;
