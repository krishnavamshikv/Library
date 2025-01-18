import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Library from "./components/library";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/library">
              <li>Library</li>
            </Link>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
