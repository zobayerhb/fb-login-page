import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// create route
const router = createBrowserRouter([...PublicRoute, ...PrivateRoute]);

export default router;
