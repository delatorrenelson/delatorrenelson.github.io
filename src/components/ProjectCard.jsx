import React from "react";

export default function ProjectCard({ project }) {
  const { imgSrc, description, title, href } = project;

  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="col-sm-6 col-lg-3 rounded-3 mb-4 project" onClick={()=>{openLink(href)}}>
      <div className="card shadow">
        <img className="card-img-top" alt="100%x280" src={imgSrc} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
