import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HTML from "./components/pages/HTML";
import CSS from "./components/pages/CSS";
import Homepage from "./components/pages/Homepage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <Link to="/html">HTML</Link>{" "}
          <Link to="/css">CSS</Link>{" "}
        </nav>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/html" element={<HTML></HTML>} />
          <Route path="/css" element={<CSS></CSS>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
