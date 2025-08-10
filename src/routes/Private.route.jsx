import Loader from "@/components/widgets/Loader";
import { AppContext } from "@/context/App.Context";
import AuthLayout from "@/Layouts/AuthLayout";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return <AuthLayout />;
  }
};

export default PrivateRoutes;
