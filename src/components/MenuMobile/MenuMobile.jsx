import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.avif";
import krest from "../../assets/images/krestMenu.png";
import "./style.scss";

const MenuMobile = ({ footerRef }) => {
  const location = useLocation();

  const [look, setLook] = useState(false);

  const listNav = [
    { id: 1, name: "Каталог туров", link: "/" },
    { id: 2, name: "Поиск туров", link: "search" },
    { id: 3, name: "О нас", link: "about" },
  ];

  const scrollToBottom = () => {
    footerRef.current.scrollIntoView();
    setLook(false);
  };

  const scroll = () => {
    window.scrollTo(0, 0);
    setLook(false);
  };

  return (
    <>
      <div className="menuMoblie">
        <div className="container">
          <div className="menuMoblie__inner">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="menuMoblie__inner__content">
              {!look && (
                <div className="menuIcon" onClick={() => setLook(true)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {look && (
        <div className="menuChoice">
          <div className="menuChoice__inner">
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
            <div className="krestMenu" onClick={() => setLook(false)}>
              <img src={krest} alt="krest" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
