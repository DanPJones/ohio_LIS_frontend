// App.tsx
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import ConfirmPage from "./pages/confirm/page";
import HomePage from "./pages/homepage/page";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
