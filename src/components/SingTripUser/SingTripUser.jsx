import React, { useState } from "react";
import "./style.scss";
import Modals from "../Modals/Modals";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import { createSingTrip } from "../../store/reducers/requestSlice";

const SingTripUser = ({ modal, setModal }) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState({ phone: "", fio: "" });

  const { everyTrip } = useSelector((state) => state.requestSlice);

  const onChange = (e) => {
    const { name, value } = e.target;
    setDate({ ...date, [name]: value });
  };

  const tripSingFN = (e) => {
    e.preventDefault();
    dispatch(createSingTrip({ tripId: everyTrip?.id, ...date }));
    setModal(false);
  };

  return (
    <Modals openModal={modal} setOpenModal={() => setModal()}>
      <div className="addLocation">
        <form onSubmit={tripSingFN}>
          <h3>Введите ваш номер</h3>
          <InputMask
            className="titleInput"
            maxLength={100}
            onChange={onChange}
            required
            name="phone"
            mask="+999(999)99-99-99"
          />
          <h3>Введите ваше имя</h3>
          <input
            type="text"
            className="titleInput"
            maxLength={100}
            onChange={onChange}
            required
            name="fio"
          />
          <button type="submit">Отправить локацию</button>
        </form>
      </div>
    </Modals>
  );
};

export default SingTripUser;
