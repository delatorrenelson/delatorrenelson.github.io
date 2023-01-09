import React from "react";
import SkillCard from "./SkillCard";
import { uuid } from "../lib/uuid";

/** JSON Data */
import skillsList from "../assets/skills.json";

export default function Skills() {
  return (
    <section className="row align-items-stretch mb-4 border">
      {skillsList.map((skill) => {
        console.log(uuid(5));
        return <SkillCard key={uuid(5)} skill={skill} />;
      })}
    </section>
  );
}
