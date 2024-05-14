import React, { useEffect, useState } from "react";
import "./style.scss";
import searchImg from "../../assets/icons/search.svg";
import { debounce } from "lodash";
import { listTrips } from "../../helpers/localData";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchData,
  searchTrips,
} from "../../store/reducers/requestSlice";

const SearchPage = () => {
  const dispatch = useDispatch();

  const { searchData } = useSelector((state) => state.requestSlice);

  const onChange = debounce((e) => {
    const { value } = e.target;
    if (value?.length > 2) {
      dispatch(searchTrips(value));
    } else if (value?.length === "") {
      dispatch(clearSearchData());
    }
  }, 800);

  return (
    <div className="searchPage">
      <div className="container">
        <div className="searchPage__inner">
          <div className="inputBlock">
            <input type="text" onChange={onChange} placeholder="Поиск ..." />
            <img src={searchImg} alt="searchImg" />
          </div>
          <div className="listTrips">
            {searchData?.map((item) => (
              <NavLink
                to={`/every/${item?.id}`}
                className="everySlide"
                key={item?.id}
              >
                <div className="texts">
                  <img src={item?.photo} alt="" />
                  <h5>{item.title}</h5>
                  <p>Дата выезда: {item?.date}</p>
                  {item?.price ? (
                    <p>Цена: {item?.price}</p>
                  ) : (
                    <p>Цена: от 1000 сом</p>
                  )}
                </div>
                <button>Подробнее ...</button>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
