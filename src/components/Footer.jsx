import React from "react";

export default function Footer() {
  return (
    <footer className="row mb-5">
      <nav className="d-flex justify-content-center">
        <a
          target="_blank"
          className="nav-link text-purple fw-light fs-3"
          href="https://github.com/delatorrenelson"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          target="_blank"
          className="nav-link text-purple fw-light fs-3"
          href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </nav>
      <p className="d-flex justify-content-center">
        <small className="text-purple">&#169; 2022</small>
      </p>
    </footer>
  );
}
