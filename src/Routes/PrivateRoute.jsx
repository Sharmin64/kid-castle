import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <RingLoader
        className="items-center justify-center top-96 mx-auto"
        color="#36d7b7"
        size="xl"
      />
    );
  }

  if (user?.email) {
    return children;
  }
  toast("You have to log in first to see the view details page");

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
