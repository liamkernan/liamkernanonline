import "./PageStyles.css";
import "./ProductionPage.css";
import React, { useState } from 'react';

function ProductionPage() {
  const [entries, setEntries] = useState([
    { id: 1, name: "New File", audioUrl: null, fileName: "" }
  ]);

  const addEntry = () => {
    setEntries([
      ...entries,
      { id: Date.now(), name: "New File", audioUrl: null, fileName: "" }
    ]);
  };

  const handleFileChange = (id, event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEntries(entries.map(e => e.id === id ? { ...e, audioUrl: url, fileName: file.name } : e));
    }
  };

  return (
    <div className="page-container">
      <h2>Production</h2>
      <div className="file-explorer">
        {entries.map(entry => (
          <div className="file-entry" key={entry.id}>
            <div className="file-info">
              <span className="file-icon">📄</span>
              <span className="file-name">{entry.fileName || entry.name}</span>
            </div>
            <input
              type="file"
              accept="audio/mpeg"
              onChange={e => handleFileChange(entry.id, e)}
            />
            {entry.audioUrl && (
              <audio controls src={entry.audioUrl} />
            )}
          </div>
        ))}
      </div>
      <button onClick={addEntry} className="add-file-btn">
        Add Entry
      </button>
    </div>
  );
}

export default ProductionPage;
