import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Games from "./pages/Games.tsx";

// This defines the pages for my app
const App = () => (
  <div style={{ textAlign: "center" }}>
    <Routes>
      <Route
        path="/12-comp-database-assessment-2025-Squawkykaka"
        element={<div>Welcome to the Home page</div>}
      />
      <Route
        path="/12-comp-database-assessment-2025-Squawkykaka/login"
        element={<Login />}
      />
      <Route
        path="/12-comp-database-assessment-2025-Squawkykaka/games"
        element={<Games />}
      />
    </Routes>
  </div>
);

export default App;
