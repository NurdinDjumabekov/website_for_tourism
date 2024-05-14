import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import SearchPage from "../pages/SearchPage/SearchPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import EveryTripPage from "../pages/EveryTripPage/EveryTripPage";
import Preloader from "../components/Preloader/Preloader ";
import Alerts from "../components/Alerts/Alerts";

const MainRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/every/:id" element={<EveryTripPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/contact" element={<ContactsPage />} /> */}
        </Route>
      </Routes>
      <Preloader />
      <Alerts />
    </>
  );
};

export default MainRoutes;
