import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { HashRouter, Routes, Route } from "react-router-dom";
import {ProtectedRoute , PublicRoute} from './routes/ProtectedRoute'

function App() {
  return (
    <section>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </section>
  );
}

export default App;
