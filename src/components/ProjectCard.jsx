import React from "react";

export default function ProjectCard({ project }) {
  const { imgSrc, description, title } = project;

  const openLink = () => {
    const url = `www.google.com`;
    window.open(url, "_blank");
  };
  return (
    <div className="col-sm-6 col-lg-3 rounded-5 mb-4">
      <div className="card shadow bg-body" onClick={openLink}>
        <img className="" alt="100%x280" src={imgSrc} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
