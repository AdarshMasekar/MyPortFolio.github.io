import React from "react";
import { portfolioData } from "../app/utils/data";

function Resume() {
  const { resume } = portfolioData;
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>
    </section>
  );
}

export default Resume;
