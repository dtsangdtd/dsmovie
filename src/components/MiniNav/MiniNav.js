import React from "react";
import { NavLink } from "react-router-dom";
import "../MiniNav/MiniNav.scss";

export default function MiniNav() {
  return (
    <div className="MiniNav">
      <div className="MiniNav__wrapper">
        <ul className="MiniNav__menu">
          <li className="MiniNav__menu-item">
            <NavLink target="_blank" title="Danh sách phim" className="nav-link link__item" to="/allmovie">
            <i class="fas fa-photo-video"></i>
            </NavLink>
          </li>
          <li className="MiniNav__menu-item">
            <NavLink target="_blank" title="Danh sách rạp" className="nav-link link__item" to="/clustercinema">
            <i class="fas fa-layer-group"></i>
            </NavLink>
          </li>
          <li className="MiniNav__menu-item">
            <NavLink target="_blank" title="Danh sách tin tức" className="nav-link link__item" to="/news">
            <i class="far fa-newspaper"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
