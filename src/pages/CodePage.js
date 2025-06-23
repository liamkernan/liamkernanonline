import "./PageStyles.css";
import "./CodePage.css";
import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    repo: "https://github.com/example/portfolio",
    live: "https://example.com"
  },
  {
    title: "Sample App",
    repo: "https://github.com/example/sample-app",
    live: "https://sample.example.com"
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
