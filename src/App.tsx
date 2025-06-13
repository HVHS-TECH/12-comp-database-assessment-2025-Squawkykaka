import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Games from "./pages/Games.tsx";

// This defines the pages for my app
const App = () => (
  <div style={{ textAlign: "center" }}>
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  </div>
);

export default App;
