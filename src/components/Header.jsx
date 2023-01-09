import React from "react";

export default function Header() {
  return (
    <section className="row align-items-center section" id="home_section">
      <div className="col-md-5 order-md-2">
        <img
          id="profile"
          src="/src/assets/img/profile.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-7 order-md-1">
        <div className="">
          <h4 className="fw-bold">Hi</h4>
          <h1 className="fw-bold text-theme-color1" id="name">
            I'm, Nelson
          </h1>
          <h2 className="fw-bold">Frontend Developer</h2>
        </div>
        <p>
          <small className="d-block pb-2">
            <i className="fas fa-envelope"></i>
            <a className="text-decoration-none text-dark" href="#">
              delatorrenelson127@gmail.com
            </a>
          </small>
          <small className="d-block pb-2">
            <i className="fas fa-phone"></i>
            <a className="text-decoration-none text-dark" href="#">
              0915-7047-251
            </a>
          </small>
          <small className="d-block pb-2">
            <i className="fas fa-map-marker-alt"></i>
            <a className="text-decoration-none text-dark" href="#">
              Caloocan City, Manila, Philippines
            </a>
          </small>
        </p>
      </div>
    </section>
  );
}
