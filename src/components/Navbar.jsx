import React from "react";

import avatar from "../assets/img/myAvatar_glass.png";

const navLink = [
  {
    text: "Projects",
    href: "#projects",
    classes: "fs-4 nav-link text-purple px-2 mx-2",
  },
  {
    text: "Skills",
    href: "#skills",
    classes: "fs-4 nav-link text-purple px-2 mx-2",
  },
  {
    text: "Education",
    href: "#education",
    classes: "fs-4 nav-link text-purple px-2 mx-2",
  },
  {
    text: "Contact",
    href: "#contact",
    classes: "fs-4 nav-link text-purple px-2 mx-2",
  },
];

export default function Navbar() {
  return (
    <nav className="row mb-4 navbar navbar-expand-sm fw-bold">
      <div className="container-fluid">
        <a className="navbar-brand d-xs-none d-md-block" href="#home_section">
          <img id="brand_icon" src={avatar} alt="" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"          
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fas fa-bars text-purple"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {navLink.map((lnk) => {
              const { text, href, classes } = lnk;
              return (
                <a key={href} href={href} className={classes}>
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* OffCanvas */}
      <div
        className="offcanvas offcanvas-end bg-white w-75"
        tabIndex="-1"
        data-bs-scroll="true"
        id="offcanvasRight"
        aria-labelledby="offcanvasWithBothOptions"
      >
        <div className="offcanvas-body">
          <div className="navbar-nav">
            {navLink.map((lnk) => {
              const { text, href, classes } = lnk;
              return (
                <a
                  key={href}
                  href={href}
                  className={classes}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* OffCanvas END */}
    </nav>
  );
}
