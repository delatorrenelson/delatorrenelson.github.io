import React from "react";

const projectList = [
  {
    imgSrc: "assets/img/preview2.jpg",
    description: "",
    title: "",
  },
  {
    imgSrc: "assets/img/preview2.jpg",
    description: "",
    title: "",
  },
  {
    imgSrc: "assets/img/preview2.jpg",
    description: "",
    title: "",
  },
];

export default function Project() {
  return (
    <section
      className="row align-items-center flex-grow-1 section"
      id="projects"
    >
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h2 className="text-center fw-bold text-theme-color1">Projects</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-md-4 rounded-5 my-4">
                <div className="card shadow bg-body">
                  <img
                    className=""
                    alt="100%x280"
                    src="./src/assets/img/preview4.png"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Special title treatment 2</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 rounded-5 my-4">
                <div className="card shadow bg-body">
                  <img
                    className=""
                    alt="100%x280"
                    src="./src/assets/img/preview5.png"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Special title treatment 2</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 rounded-5 my-4">
                <div className="card shadow bg-body">
                  <img
                    className=""
                    alt="100%x280"
                    src="./src/assets/img/preview6.png"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Special title treatment 2</h4>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <!-- Carousel Control --> */}
        <div className="container-fluid">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <i className="fas fa-chevron-left fa-4x text-purple"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <i className="fas fa-chevron-right fa-4x text-purple"></i>
          </button>
        </div>
        {/* <!-- Carousel Control ends --> */}
      </div>
    </section>
  );
}
