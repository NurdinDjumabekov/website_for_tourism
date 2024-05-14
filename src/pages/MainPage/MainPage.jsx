import React from "react";
import "./MainPage.scss";
import { useNavigate } from "react-router-dom";
import limeTrip from "../../assets/icons/limeTrip.svg";
import asdas from "../../assets/icons/linkColor.svg";
import PopularTrip from "../../components/MainPage/PopularTrip/PopularTrip";
import LastWeekTrips from "../../components/MainPage/LastWeekTrips/LastWeekTrips";
import DiscountTrips from "../../components/MainPage/DiscountTrips/DiscountTrips";
import Teams from "../../components/MainPage/Teams/Teams";
import Accomodations from "../../components/MainPage/Accomodations/Accomodations";
import Recom from "../../components/MainPage/Recom/Recom";

const MainPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mainPage">
        <div className="container">
          <div className="mainPage__inner">
            <div>
              <div className="logoMain">
                <img src={asdas} alt="" />
                <img src={limeTrip} alt="" />
              </div>
              <p>
                Откройте для себя современный Кыргызстан: захватывающие горные
                пейзажи, уникальные озера, культурные фестивали и гостеприимство
                местных жителей создадут незабываемый опыт для всех
                путешественников.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PopularTrip />
      <Teams />
      <LastWeekTrips />
      <Accomodations />
      <DiscountTrips />
      <Recom />
    </>
  );
};
export default MainPage;
