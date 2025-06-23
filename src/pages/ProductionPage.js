import "./PageStyles.css";
import "./ProductionPage.css";
import React from 'react';

// A fixed list of example files to mimic a file explorer. No uploads allowed.
const entries = [
  { id: 1, fileName: "Kick.wav" },
  { id: 2, fileName: "Snare.wav" },
  { id: 3, fileName: "HiHat.wav" }
];

function ProductionPage() {

  return (
    <div className="page-container">
      <h2>Production</h2>
      <div className="file-explorer">
        {entries.map((entry) => (
          <div className="file-entry" key={entry.id}>
            <div className="file-info">
              <span className="file-icon">📄</span>
              <span className="file-name">{entry.fileName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductionPage;
