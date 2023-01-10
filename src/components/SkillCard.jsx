import React from "react";

export default function SkillCard({ skill }) {
  const { title, description, icon, measure } = skill;

  const styleValue = {
    "--value": measure,
  };

  return (
    <div className="d-flex my-2 mb-4 col-12 col-md-4 col-sm-6 p-3 p-md-4">
      <div className="card shadow flex-fill p-1 p-md-4">
        <div className="card-body justify-content-between">
          <div className="d-flex fs-1 justify-content-center align-items-center set-size mb-4">
            <div
              role="progressbar"
              aria-valuenow={measure}
              aria-valuemin="0"
              aria-valuemax="100"
              style={styleValue}
              className="text-center d-flex justify-content-center align-items-center"
            >
              <div className="">
                <i className={`fab fa-lg ${icon} text-purple fa-icon`}></i>
                <span className="d-block fs-5">{measure}%</span>
              </div>
            </div>
          </div>

          <div className="flex-fill">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function SkillCard({ skill }) {
//   const { title, description, icon, measure } = skill;
//   return (
//     <div className="d-flex my-2 mb-4 col-12 col-md-4 col-sm-6 p-4">
//       <div className="card shadow flex-fill p-4">
//         <div className="card-body d-flex justify-content-between">
//           <div className="d-flex p-2 mx-auto justify-content-center">
//             <i className={`fab fa-lg ${icon} text-purple fa-icon`}></i>
//           </div>
//           <div className="flex-fill p-2">
//             <h5 className="card-title fw-bold">{title}</h5>
//             <p className="card-text">{description}</p>
//           </div>
//         </div>
//         <div className="card-footer border-0 bg-white">
//           <div className="progress">
//             <div
//               id="html"
//               className="progress-bar bg-purple"
//               role="progressbar"
//               aria-valuenow={measure}
//               aria-valuemin="0"
//               aria-valuemax="100"
//               style={{ width: `${measure}%` }}
//             >
//               {`${measure}%`}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
