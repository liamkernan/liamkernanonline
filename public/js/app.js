const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

const Landing = () => (
  <div className="flex flex-col items-center justify-center min-h-screen -mt-20">
    <h1 className="text-5xl font-bold mb-12">Liam Kernan</h1>
    <nav className="space-y-4 text-2xl">
      <Link to="/code" className="px-4 py-2 border border-transparent hover:border-gray-800">Code</Link>
      <Link to="/art" className="px-4 py-2 border border-transparent hover:border-gray-800">Art</Link>
      <Link to="/production" className="px-4 py-2 border border-transparent hover:border-gray-800">Production</Link>
      <Link to="/personal" className="px-4 py-2 border border-transparent hover:border-gray-800">Personal</Link>
    </nav>
  </div>
);

const Page = ({ title }) => (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p>Content coming soon.</p>
    <Link to="/" className="text-blue-600 hover:underline">Back</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/code" element={<Page title="Code" />} />
      <Route path="/art" element={<Page title="Art" />} />
      <Route path="/production" element={<Page title="Production" />} />
      <Route path="/personal" element={<Page title="Personal" />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
