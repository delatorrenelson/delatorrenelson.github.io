import React from "react";

export default function Footer() {
  return (
    <div className="row mb-4">
      <nav className="d-flex justify-content-center">
        <a
          target="_blank"
          className="nav-link text-purple fw-light"
          href="https://github.com/delatorrenelson"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          target="_blank"
          className="nav-link text-purple fw-light"
          href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </nav>
      <p className="d-flex justify-content-center">
        <small className="text-purple">&#169; All rights reserved 2022</small>
      </p>
    </div>
  );
}
