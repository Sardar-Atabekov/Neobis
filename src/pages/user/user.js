import React, { useEffect, useState } from "react";
import { getData } from "../../functions/requests";
import Title from "./../../components/title/title";
import pmIcon from "./../../assets/icons/pmIcon.svg";
import truckIcon from "./../../assets/icons/truck.svg";
import phoneIcon from "./../../assets/icons/phone.svg";
import Loading from "../../components/loading/loading";
import EllipseImg from "./../../assets/img/Ellipse 40.png";
import summaryIcon from "./../../assets/icons//summary.svg";
import telegramIcon from "./../../assets/icons/telegram.svg";
import mailSendIcon from "./../../assets/icons/bx-mail-send.svg";
import StudyPlan from "./../../components/study-plan/study-plan";
import { userRole, projectUserRole } from "./../../constants/status";
import { Link } from "react-router-dom";
import "./user.css";

const UserPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const userRights = JSON.parse(localStorage.getItem("neobisHUBDate"));

  useEffect(() => {
    getData(`user/${props.match.params.id}`).then((res) => {
      setUserData(res);
      setLoading(true);
    });
  }, [props.match.params.id]);

  return (
    <div className="wrapper">
      {loading ? (
        <>
          <Title
            link={userRights.change_user ? `/edit-user/${userData.id}/` : false}
          >
            Карточка пользователя
          </Title>
          <div>
            <div className="d-flex mt-5 user-info-block">
              <img src={EllipseImg} alt="EllipseImg" />
              <div className="user-info">
                <h4>
                  {userData.name} {userData.surname}{" "}
                </h4>
                <b>{userData.department_name}</b>
                <span>{userRole[userData.status]}</span>
              </div>
              <div className="user-contacts">
                <span>
                  <img src={mailSendIcon} alt="mailSendIcon" /> {userData.email}{" "}
                </span>
                <span>
                  <img src={phoneIcon} alt="phoneIcon" /> {userData.phone}
                </span>
                <span>
                  <img src={telegramIcon} alt="telegramIcon" />
                  {userData.telegram}
                </span>
              </div>
              <div className="p-4">
                <span>
                  <img src={summaryIcon} alt="phoneIcon" /> Резюме{" "}
                </span>
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="w-70">
                <span className="user-info-title">
                  {/* Активные */}
                  Проекты
                </span>
                <div className="user-projects">
                  {userData.projects.map((project) => (
                    <Link
                      key={project.project}
                      to={`/project/${project.project}`}
                      className="project"
                    >
                      <div className="flex-start project-block">
                        <img
                          src={truckIcon}
                          alt="Cargo truck"
                          className="projectIcon"
                        />
                        <div className="project-description text-left">
                          <h5 className="project-name">{project.name}</h5>
                          <span className="project-span">
                            Мобильное приложение
                          </span>
                        </div>
                        <span className={`project-status a`}>Активный</span>
                      </div>
                      <div className="user-role">
                        <span className="pmIcon">
                          <img src={pmIcon} alt="pm department icon" />
                        </span>
                        <span className="project-span">
                          {projectUserRole[project.user_role]}
                        </span>
                      </div>

                      <div className="line-status">
                        <span className="percentage">100%</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="user-info-title">Стади план</span>
                <div className="pt-4">
                  <StudyPlan
                    icon={pmIcon}
                    department={userData.department_name}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default UserPage;
