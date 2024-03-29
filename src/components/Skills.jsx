import React from "react";
import SkillCard from "./SkillCard";
import { uuid } from "../lib/uuid";

/** JSON Data */
import skillsList from "../assets/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="row align-items-stretch">
      <h2 className="fw-bold fs-1 text-center">Skills</h2>
      {skillsList.map((skill) => (
        <SkillCard key={uuid(5)} skill={skill} />
      ))}
    </section>
  );
}
