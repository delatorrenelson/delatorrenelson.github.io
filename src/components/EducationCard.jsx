import React from "react";

export default function EducationCard({ education }) {
  const {title, description, icon, year} = education;

  return (
    <div className="d-flex my-4 col-12 col-lg-6">
      <div className="card shadow d-flex">
        <div className="card-body d-flex flex-wrap justify-content-between">
          <div className="d-flex p-2 mx-auto border justify-content-center">
            <i className={`fab fa-lg ${icon} text-purple fa-icon`}></i>
          </div>
          <div className="flex-fill p-2 text-start border">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
