import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/authSlice";
import { useAppSelector } from "../../redux/hook";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  if (user?.role) {
    console.log(user.role);
  }
  if (user?.role !== "admin") {
    return <Navigate to="/login"></Navigate>;
  }

  return <>{children}</>;
};

export default AdminRoute;
