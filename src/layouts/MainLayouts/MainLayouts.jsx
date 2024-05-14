import React, { useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.avif";
import "./MainLayouts.scss";
import Footer from "../../common/Footer/Footer";
import MenuMobile from "../../components/MenuMobile/MenuMobile";

const MainLayouts = () => {
  const location = useLocation();
  const footerRef = useRef(null);

  const listNav = [
    { id: 1, name: "Каталог туров", link: "/" },
    { id: 2, name: "Поиск туров", link: "search" },
    { id: 3, name: "О нас", link: "about" },
  ];

  const scrollToBottom = () => {
    footerRef.current.scrollIntoView();
  };

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="menu">
        <div className="container">
          <div className="menu__inner">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="menu__inner__content">
              {listNav.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  className={
                    location.pathname === `/${item.link}` ? "active" : ""
                  }
                  onClick={scroll}
                >
                  {item.name}
                </NavLink>
              ))}
              <button onClick={scrollToBottom}>Контакты</button>
            </div>
          </div>
        </div>
      </div>
      <MenuMobile footerRef={footerRef} />
      <Outlet />
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default MainLayouts;
