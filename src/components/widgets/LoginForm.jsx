import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { Button } from "../ui/button";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "firstError" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Username or Email"
          isError={errors.username}
          {...register("username", { required: "Invalid Username" })}
        />
        <Input
          type={"password"}
          label="Password"
          isError={errors.username}
          {...register("password", { required: "Invalid Password" })}
        />
        <Button className={"mt-3"}>Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
