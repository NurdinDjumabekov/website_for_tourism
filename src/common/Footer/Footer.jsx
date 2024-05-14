import React from "react";
import logo from "../../assets/icons/logo.avif";
import call from "../../assets/icons/call.svg";
import email from "../../assets/icons/email.svg";
import "./style.scss";

const Footer = ({ footerRef }) => {
  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="footer"
      ref={footerRef}
    >
      {/* <div className="line"></div> */}
      <div className="container">
        <div className="footer__inner">
          <div className="footer__inner__block">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="moreInfo">
              Наша компания занимается созданием уникальных и комфортных
              путешествий.
            </p>
            <a>
              <img src={call} alt="" />
              <p>Позвоните нам: 0700754454</p>
            </a>
            <a>
              <img src={email} alt="" />
              <p>Отправьте сообщение на почту dui.nurdin@gmail.com</p>
            </a>
          </div>
          <div className="footer__inner__block noneMob">
            <h6>Компания</h6>
            <a className="href">О нас</a>
            <a className="href">Блог</a>
            <a className="href">Политика конфиденциальности </a>
          </div>
          <div className="footer__inner__block">
            <h6>Информация</h6>
            <a className="href">
              <img src={call} alt="" className="call" />
              <p className="callText">W/A 0700754454</p>
            </a>
            <a className="href">
              <img src={call} alt="" className="call" />
              <p className="callText">Телеграм: 0700754454</p>
            </a>
            <a className="href">
              <img src={call} alt="" className="call" />
              <p className="callText">Инстаграм: Lime Trip</p>
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <span>Copyright © 2024 Lime Trip. При поддержке KSTU</span>
    </div>
  );
};

export default Footer;
