import React from "react";
import EducationCard from "./EducationCard";
import { uuid } from "../lib/uuid";
/** JSON Data */
import educationList from "../assets/education.json";

export default function Education() {
  return (
    <section id="education" className="row align-items-stretch">
      <h2 className="fw-bold text-center">Education</h2>
      {educationList.map((education) => {
        return <EducationCard key={uuid(5)} education={education} />;
      })}
    </section>
  );
}
