import PrivateRoutes from "@/routes/Private.route";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <PrivateRoutes>
      <Outlet />
    </PrivateRoutes>
  );
};

export default MainLayout;
