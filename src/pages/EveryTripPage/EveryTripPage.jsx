import React, { useEffect } from "react";
import "./style.scss";
import EverySlid from "../../components/EveryTripPage/EverySlid/EverySlid";
import { useParams } from "react-router-dom";
import { detailedTrips } from "../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";

const EveryTripPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailedTrips(id));
  }, [id]);

  return (
    <div className="every">
      <EverySlid />
    </div>
  );
};

export default EveryTripPage;
