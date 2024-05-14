import React, { useEffect } from "react";
import logo from "../../assets/icons/logo.avif";
import "./style.scss";
import Teams from "../../components/MainPage/Teams/Teams";
import { useDispatch } from "react-redux";
import { getOurGids } from "../../store/reducers/requestSlice";

const AboutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOurGids());
  }, []);

  return (
    <div className="aboutPage">
      <div className="container">
        <div className="aboutPage__inner">
          <div className="contents">
            <div className="text">
              <img src={logo} alt="logo" className="logo" />
              <p>
                Мы, клуб путешествий Lime trip команда профессиональных
                инструкторов, которые любят горы и хотят показать их красоту и
                величие всем желающим. Для многих, походы в горы это что-то
                сложное и недостижимое, но мы хотим развеять эти сомнения. Наша
                задача организовать для вас максимально комфортное путешествие,
                наполненное яркими эмоциями в компании единомышленников. Мы не
                стоим на месте и регулярно развиваем новые направления, чтобы
                каждый мог найти себе что-то по душе. Мир прекрасен и интересен
                - добро пожаловать в Lime trip.
              </p>
            </div>
            <div className="imgs">
              <img
                src="https://s09.stc.yc.kpcdn.net/share/i/12/11939844/wr-960.webp"
                alt=""
              />
            </div>
          </div>
          <div className="contents">
            <div className="text">
              <h5>Садирдинов Руслан</h5>
              <p>
                Руководитель Lime trip, инструктор, гид/проводник горного и
                пешеходного туризма. Моя любовь к походам в горы началась в
                далеком 2006 году, когда я впервые попал в настоящий туристский
                поход. После этого в моем сознании четко закрепилось понимание,
                что горы это мой второй дом. С каждым годом мне хотелось
                открывать для себя новые места и районы. Увлечение плавно
                перешло на профессиональный уровень. Сначала я заразил горами
                своих друзей и близких, а затем пришла идея организовать клуб
                путешествий. Сейчас мы команда, объединённая одной общей идеей,
                создания уникальных впечатлений.
              </p>
            </div>
            <div className="imgs">
              <img
                src="https://gorny-club.kz/wp-content/uploads/2024/01/DSC_0862-scaled-1000x800.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Teams />
    </div>
  );
};

export default AboutPage;
