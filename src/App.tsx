import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";

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
    </Routes>
  </div>
);

export default App;
