import React from "react";
import { uuid } from "../lib/uuid";
import ProjectCard from "./ProjectCard";

import projectList from "../assets/projects.json"

export default function Project() {
  return (
    <section className="row g-4" id="projects">
      <h1 className="fs-1 text-center fw-bold mb-4">Projects</h1>
      {projectList.map((prjct) => (
        <ProjectCard key={uuid()} project={prjct} />
      ))}
    </section>
  );
}
