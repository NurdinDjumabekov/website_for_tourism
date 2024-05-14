import React, { useRef, useState } from "react";
import "./style.scss";
import Modals from "../Modals/Modals";
import { useDispatch } from "react-redux";
import { addLocation } from "../../store/reducers/requestSlice";

const AddUserLocation = ({ modal, setModal, getData }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [date, setDate] = useState({
    email: "",
    title: "",
    file: null, // Здесь будет сохраняться выбранный файл
  });

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDate({ ...date, [name]: value });
  };

  const sendNewLocation = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", date.email);
    formData.append("title", date.title);
    formData.append("file", date.file);

    dispatch(addLocation({ data: formData, getData }));

    // console.log(formData, "formData");
    // console.log(date, "date");
    setModal(false);
  };

  return (
    <Modals openModal={modal} setOpenModal={() => setModal()}>
      <div className="addLocation">
        <form onSubmit={sendNewLocation}>
          <h3>Введите почту</h3>
          <input
            type="email"
            className="titleInput"
            maxLength={100}
            onChange={onChange}
            required
            name="email"
          />
          <h3>Введите наименование вашей локации</h3>
          <input
            type="text"
            className="titleInput"
            maxLength={100}
            onChange={onChange}
            required
            name="title"
          />
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              setDate({ ...date, file: e.target.files[0] });
            }}
            required
            name="file"
          />
          <p onClick={handleUploadClick}>Загрузить картинку</p>
          <button type="submit">Отправить локацию</button>
        </form>
      </div>
    </Modals>
  );
};

export default AddUserLocation;
