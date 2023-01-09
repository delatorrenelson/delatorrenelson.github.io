import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid">
      <nav className="d-flex justify-content-center">
        <a
          target="_blank"
          className="nav-link text-theme-color1 fw-light"
          href="https://github.com/delatorrenelson"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          target="_blank"
          className="nav-link text-theme-color1 fw-light"
          href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </nav>
      <p className="d-flex justify-content-center">
        <small className="text-theme-color1">&#169; All rights reserved 2022</small>
      </p>
    </div>
  );
}
