import React from "react";

import profile from "../assets/img/profile.png";

export default function Header() {
  return (
    <section className="row d-flex justify-content-center" id="home_section">
      <div className="col-md-5 order-md-2 d-flex flex-fill align-items-center justify-content-center">
        <img
          id="profile"
          src={profile}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-5 order-md-1 d-flex flex-column justify-content-center">
        <h4 className="fw-bold">Hi</h4>
        <h1 className="fw-bold text-purple" id="name">
          I'm, Nelson
        </h1>
        <h2 className="fw-bold">Frontend Developer</h2>
        <p>
          <small className="d-block pb-2">
            <i className="fas fa-envelope"></i>
            <a className="text-decoration-none text-dark ms-2" href="#">
              delatorrenelson127@gmail.com
            </a>
          </small>
          <small className="d-block pb-2">
            <i className="fas fa-phone"></i>
            <a className="text-decoration-none text-dark ms-2" href="#">
              0915-7047-251
            </a>
          </small>
          <small className="d-block pb-2">
            <i className="fas fa-map-marker-alt"></i>
            <a className="text-decoration-none text-dark ms-2" href="#">
              Caloocan City, Manila, Philippines
            </a>
          </small>
        </p>
      </div>
    </section>
  );
}