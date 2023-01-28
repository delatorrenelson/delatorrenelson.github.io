import React from "react";
import { uuid } from "../lib/uuid";
import ProjectCard from "./ProjectCard";

import { projects } from "../assets/projects";

export default function Project() {
  return (
    <section className="" id="projects">
      <h1 className="fs-1 text-center fw-bold mb-4">Projects</h1>
      <div className="row">
        {projects.map((prjct) => (
          <ProjectCard key={uuid(5)} project={prjct} />
        ))}
      </div>
    </section>
  );
}
