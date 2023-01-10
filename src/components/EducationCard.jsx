import React from "react";

export default function EducationCard({ education }) {
  const { title, description, icon, year } = education;

  return (
    <div className="d-flex col-12 col-md-3 p-3 ">
      <div className="card shadow flex-fill p-1 ">
        <div className="card-body justify-content-between ">
          <div className="d-flex p-2 mb-2 mx-auto justify-content-center">
            <i className={`fab fa-lg ${icon} text-purple fa-icon`}></i>
          </div>
          <div className="flex-fill text-start ">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}