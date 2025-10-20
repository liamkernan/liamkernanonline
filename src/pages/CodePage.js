import "./PageStyles.css";
import "./CodePage.css";
import React from 'react';
import BackButton from '../components/BackButton';

const projects = [
  {
    title: "(helpstudy.me)",
    repo: "https://github.com/liamkernan/HELPSTUDYME",
    live: "https://helpstudy.me",
    description: "A web application that uses AI to generate (and score) endless practice questions for everything"
  },
  {
    title: "March Madness",
    repo: "https://github.com/liamkernan/MarchMadness",
    description: "Console-based Java program that predicts NCAA March Madness outcomes based on past stats"
  },
    {
        title: "Conduct",
        description: "Localized LLM to provide law firms & practicing attorneys a secure portal to AI.",
    },
    {
        title: "Small Projects",
        repo: "https://github.com/liamkernan/SmallProjects",
        description: "Collection of various programming experiments and utilities"
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
        <h2 className="text-center text-8xl">code</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
            </div>
            <div className="card-links">
              {!project.hideRepo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
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
