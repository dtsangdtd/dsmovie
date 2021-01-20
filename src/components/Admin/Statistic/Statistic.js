import React from "react";
import "./Statistic.scss";
import { NavLink } from "react-router-dom";
import Logo_dashboard from "../../../images/Logo_dashboard.png";

export default function Statistic() {
  const info = JSON.parse(localStorage.getItem("userLogin"));
  return (
    <div className="home__dashboard">
      <div className="container">
        <div className="row">
          <div className="col col__info">
            <div className="dashboard-info">Admin: {info.hoTen}</div>
          <img alt="avt" src={Logo_dashboard} />

          </div>
          <div className="col col__moviemanagement">
            <h2>MOVIE MANAGEMENT</h2>
            <NavLink to={`/moviemanagement`}>
              <button className="btn btn-success">
                Quản lý danh sách phim
              </button>
            </NavLink>
            <NavLink to={`/moviemanagement`}>
              <button
                data-toggle="modal"
                data-target="#addMovieModal"
                className="btn btn-warning"
              >
                Thêm phim
              </button>
            </NavLink>

            <NavLink to={`/allmovie`}>
              <button className="btn btn-primary">Danh sách phim</button>
            </NavLink>
          </div>
          <div className="col col__newsmanagement">
            <h2>NEWS MANAGEMENT</h2>
            <NavLink to={`/newsmanagement`}>
              <button className="btn btn-success">Quản lý danh sách tin</button>
            </NavLink>
            <NavLink to={`/newsmanagement`}>
              <button
                data-toggle="modal"
                data-target="#addNewsModal"
                className="btn btn-warning"
              >
                Thêm tin tức
              </button>
            </NavLink>
            <NavLink to={`/news`}>
              <button className="btn btn-primary">Danh sách tin tức</button>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col col__usermanagement">
            <h2>USER MANAGEMENT</h2>
            <NavLink to={`/usermanagement`}>
              <button className="btn btn-success">Quản lý user</button>
            </NavLink>
            <NavLink to={`/usermanagement`}>
              <button data-target="#UserModal" data-toggle="modal" className="btn btn-danger">Thêm user</button>
            </NavLink>
          </div>
          <div className="col col__showtimes">
            <h2>SHOWTIMES MANAGEMENT</h2>
            <NavLink to={`/createshowtime`}>
              <button className="btn btn-success">Quản lý lịch chiếu</button>
            </NavLink>
          </div>
          <div className="col col__webmanagement">
            {" "}
            <h2>WEB MANAGEMENT</h2>
            <NavLink to={`/`}>
              <button className="btn btn-danger">Trang chủ</button>
            </NavLink>
            <NavLink to={`/clustercinema`}>
              <button className="btn btn-success">Quản lý rạp</button>
            </NavLink>
            <NavLink to={`/profile`}>
              <button className="btn btn-danger">Profile</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
