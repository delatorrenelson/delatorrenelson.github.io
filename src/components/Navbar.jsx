import React from "react";

import avatar from "../assets/img/myAvatar_glass.png"

export default function Navbar() {    
  return (
    <nav className="row border mb-4 navbar navbar-expand-sm fw-bold">
      <div className="container-fluid bg-transparent">
        <a className="navbar-brand d-sm-none d-md-block" href="#home_section">
          <img
            id="brand_icon"
            src={avatar}
            alt=""
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="bdNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-theme-color1"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-center">
            <a className="nav-link text-theme-color1 px-2 mx-5" href="#about">
              About Me
            </a>
            <a className="nav-link text-theme-color1 px-2 mx-5" href="#projects">
              Projects
            </a>
            <a className="nav-link text-theme-color1 px-2 mx-5" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
