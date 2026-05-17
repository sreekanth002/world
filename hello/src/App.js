import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/Loader";
import Sree from "./pages/Sree";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

 function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h2>React Lazy Loading Demo</h2>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/settings">Settings</Link> |{" "}
          <hr />
          <Link to="/sree">Sree</Link>
        </nav>

        <hr />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/sree"  element={<Sree />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
export default App;