const App = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Liam Kernan</h1>
        <p className="text-gray-600">Developer & Artist</p>
      </header>
      <section id="bio" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>Hi! I'm Liam, a developer and artist passionate about building cool stuff.</p>
      </section>
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://github.com/liamkernan/project1" className="text-blue-600 hover:underline">Project 1</a></li>
          <li><a href="https://github.com/liamkernan/project2" className="text-blue-600 hover:underline">Project 2</a></li>
        </ul>
      </section>
      <section id="gallery" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Art Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://via.placeholder.com/300x200?text=Art+1" alt="Art 1" className="rounded shadow" />
          <img src="https://via.placeholder.com/300x200?text=Art+2" alt="Art 2" className="rounded shadow" />
        </div>
      </section>
      <footer className="text-center text-gray-500">
        <p>© {year} Liam Kernan</p>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
