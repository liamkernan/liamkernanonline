import "./PageStyles.css";
import "./CodePage.css";
import React from 'react';

const projects = [
  {
    title: "helpstudy.me",
    repo: "https://github.com/liamkernan/HELPSTUDYME",
    live: "https://helpstudy.me"
  },
  {
    title: "March Madness",
    repo: "https://github.com/liamkernan/MarchMadness",
  },
    {
        title: "helpstudy.me",
        repo: "https://github.com/liamkernan/HELPSTUDYME",
        live: "https://helpstudy.me"
    }
];

function CodePage() {
  return (
    <div className="page-container">
      <h2>Code</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <div className="card-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Repository
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodePage;
