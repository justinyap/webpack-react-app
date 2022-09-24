import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1 className="title">
        Hello, World!
      </h1>
    </div>
  );
}

function PageNotFound() {
  return (
    <div className="container">
      <h1 className="title-404">
        404.
      </h1>
    </div>
  );
}
