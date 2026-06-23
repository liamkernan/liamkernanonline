import "./PageStyles.css";
import "./CodePage.css";
import React from "react";
import BackButton from "../components/BackButton";

const projects = [
  {
    title: "(helpstudy.me)",
    repo: "https://github.com/liamkernan/HELPSTUDYME",
    live: "https://helpstudy.me",
    description:
      "A web application that uses AI to generate (and score) endless practice questions for everything",
  },
  {
    title: "Mosaic",
    repo: "https://github.com/liamkernan/mosaic",
    description:
      "GitHub-connected feedback intake that collects requests from your channels, triages them, and turns them into PRs or staged issues",
  },
  {
    title: "CARESS",
    repo: "https://github.com/liamkernan/caress-your-music",
    description:
      "Hand tracking script that allows user to control Spotify playback with hand gestures",
  },
  {
    title: "Coursework",
    repo: "https://github.com/liamkernan/coursework",
    description:
      "All of my coursework, projects, and homework from my studies at Syracuse University",
  },
  {
    title: "Small Projects",
    repo: "https://github.com/liamkernan/SmallProjects",
    description: "Collection of various programming experiments and utilities",
  },
  {
    title: "this website",
    repo: "https://github.com/liamkernan/liamkernanonline",
    description: ";)",
  },
];

function CodePage() {
  return (
    <div className="page-container">
      <BackButton />
      <h2 className="text-center google-sanscode text-8xl">code</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3
              className="project-title"
              data-mobile-title={
                project.title === "MarchMadness" ? "M.M" : null
              }
            >
              {project.title}
            </h3>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
            </div>
            <div className="card-links">
              {!project.hideRepo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodePage;
