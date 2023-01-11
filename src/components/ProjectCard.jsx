import React from "react";

export default function ProjectCard({ project }) {
  const { imgSrc, description, title } = project;

  return (
    <div className="carousel-item">
      <div className="col-md-4 rounded-5 my-4">
        <div
          className="card shadow bg-body"
          onClick={() => {
            console.log("Open");
          }}
        >
          <img className="" alt="100%x280" src={imgSrc} />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

