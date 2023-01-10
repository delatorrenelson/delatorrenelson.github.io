import React from "react";
import SkillCard from "./SkillCard";
import { uuid } from "../lib/uuid";

/** JSON Data */
import skillsList from "../assets/skills.json";

export default function Skills() {
  return (
    <section className="row align-items-stretch mb-5">
        <h2 className="fw-bold fs-1 text-center">Skills</h2>
      {skillsList.map((skill) => {        
        return <SkillCard key={uuid(5)} skill={skill} />;
      })}
    </section>
  );
}
