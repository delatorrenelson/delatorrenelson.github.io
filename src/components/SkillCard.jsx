import React from "react";

export default function SkillCard({ skill }) {
  const { title, description, icon, measure } = skill;
  return (
    <div className="d-flex my-4 col-12 col-lg-4">
      <div className="card shadow py-4">
        <div className="card-body d-flex flex-wrap justify-content-between">
          <div className="d-flex p-2 mx-auto justify-content-center">
            <i
              className={`fab fa-lg ${icon} text-purple fa-icon`}
            ></i>
          </div>
          <div className="flex-fill p-2">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div className="card-footer border-0 bg-white">
          <div className="progress">
            <div
              id="html"
              className="progress-bar bg-theme-color1"
              role="progressbar"
              aria-valuenow={measure}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {`${measure}%`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
