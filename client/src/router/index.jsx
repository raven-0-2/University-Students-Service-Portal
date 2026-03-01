import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
// Import other pages later (Dashboard, Landing)

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Landing Page (Create this next) - <a href="/login" className="text-blue-500">Go to Login</a></div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/student/dashboard",
    element: <div>Student Dashboard Protected Route</div>,
  },
]);

export default router;