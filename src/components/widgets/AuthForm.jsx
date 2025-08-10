import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialSignIn from "../ui/SocialSignIn";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const location = useLocation();
  const [method, setmethod] = useState("login");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const method = searchParams.get("method");
    setmethod(method);
  }, [location.search]);

  return (
    <div className="border border-borderMain w-full max-w-[400px] bg-[#fff] p-8 flex flex-col gap-8">
      <div>
        <h3 className="text-2xl text-center font-bold pb-5">
          {method === "register" ? "Register" : "Login"}
        </h3>
        <SocialSignIn />
      </div>
      {method === "register" ? <RegisterForm /> : <LoginForm />}
      {method === "register" ? (
        <p className="text-center">
          Already have an account .
          <Link
            to={`?method=login`}
            className="text-black underline font-semibold"
          >
            Login in here
          </Link>
        </p>
      ) : (
        <p className="text-center">
          New here ?
          <Link
            to={`?method=register`}
            className="text-black underline font-semibold"
          >
            Create an account
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
