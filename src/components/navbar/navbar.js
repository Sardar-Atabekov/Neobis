import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import neobisLogo from "./../../assets/logo/logo.svg";
import peopleImg from "./../../assets/img/people.png";
import userIcon from "./../../assets/navbar-icon/user.svg";
import newsIcon from "./../../assets/navbar-icon/news 2.svg";
import usersIcon from "./../../assets/navbar-icon/users 1.svg";
import projectIcon from "./../../assets/navbar-icon/layers 1.svg";
import departmentIcon from "./../../assets/navbar-icon/graduation 1.svg";
import Swal from "sweetalert2";
import "./navbar.css";

const NavBar = () => {
  const history = useHistory();
  const [activeQuoteTextInDex, setActiveQuoteTextInDex] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  history.listen(() => {
    const randomNumber = Math.floor(Math.random() * quoteTexts.length);
    setActiveQuoteTextInDex(randomNumber);
  });

  const confirmMessage = () => {
    Swal.fire({
      title: "Вы уверены?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32b482",
      cancelButtonColor: "#d33",
      cancelButtonText: "Нет",
      confirmButtonText: "Да, выйти",
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem("neobisHUBDate");
        window.location.href = "/";
      }
    });
  };

  const quoteTexts = [
    "«Чтобы понять код мидла, нужно быть мидлом. Чтобы понять код сеньора, достаточно быть джуном»",
    "«Чтобы стать царем зверей, мало вести себя по-царски, надо быть царем!»",
    "«Чтобы стать царем зверей, мало вести себя по-царски, надо быть царем!»",
    "«Аккуратный программист — быстрый программист»",
    "«Сегодня ты делаешь код, завтра код делает тебе деньги»",
    "«Если твой код работает, значит это хороший код»",
    "«Настоящий программист гораздо больше читает, чем пишет»",
    "«Скорость имеет значение»",
    "«Кофе не помогает программировать, зато он приятен на вкус»",
    "«Идеальному коду место в музее: там ценят всякие древности»",
    "«Не экономьте на дизайне: конечный пользователь ровным счётом ничего не понимает в программировании»",
    "«Проще отучить собаку лаять на почтальона, чем отучить админа работать под рутом»",
    "«Если ваша работа не документирована, значит вы не работали»",
    "«Комментарии в коде должны быть похожими на кружевные трусики: маленькими, прозрачными, и оставляющими достаточно места для воображения»",
  ];
  let id = JSON.parse(localStorage.getItem("neobisHUBDate")).user_id;
  return (
    <nav className="navigationComponent text-left">
      <Link to={"/news/1/"}>
        <img src={neobisLogo} className="neobis_logo" alt="neobisLogo" />
      </Link>
      <Link to={"/news/1/"} className="categories">
        <img src={newsIcon} alt="newsIcon" />
        Новости
      </Link>
      <Link to={`/personal/${id}/`} className="categories">
        <img src={userIcon} alt="newsIcon" />
        Личный кабинет
      </Link>
      <Link to={"/users/"} className="categories">
        <img src={usersIcon} alt="usersIcon" />
        Пользователи
      </Link>
      <Link to={"/departments/"} className="categories">
        <img src={departmentIcon} alt="departmentIcon" />
        Департаменты
      </Link>
      <Link to={"/projects/1/"} className="categories">
        <img src={projectIcon} alt="projectIcon" />
        Проекты
      </Link>
      <div className="categories" onClick={confirmMessage}>
        Выйти
      </div>

      <div className="quote-block">
        <span>{quoteTexts[activeQuoteTextInDex]}.</span>
        <img src={peopleImg} alt="peopleImg" />
      </div>
    </nav>
  );
};

export default NavBar;
