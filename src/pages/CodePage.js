import "./PageStyles.css";
import "./CodePage.css";
import React from 'react';
import BackButton from '../components/BackButton';

const projects = [
  {
    title: "helpstudy.me",
    repo: "https://github.com/liamkernan/HELPSTUDYME",
    live: "https://helpstudy.me"
  },
  {
    title: "March Madness Predictor",
    repo: "https://github.com/liamkernan/MarchMadness",
  },
    {
        title: "Small Projects",
        repo: "https://github.com/liamkernan/SmallProjects",
    }
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
              {/* Content area for future additions like descriptions or images */}
            </div>
            <div className="card-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Repository
              </a>
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
