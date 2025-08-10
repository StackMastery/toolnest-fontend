import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ criteriaMode: "firstError", mode: "onSubmit" });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Example: Call your backend API
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || payload.message || "Signup failed");
      }

      toast.success("Account created");
      window.location.href = "/setup";
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        type="text"
        label="Name"
        autoComplete="name"
        isError={errors.name}
        {...register("name", {
          required: { value: true, message: "Name is required" },
          maxLength: {
            value: 50,
            message: "Name must be at most 50 characters",
          },
          pattern: {
            value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/u,
            message: "Use only letters, spaces, hyphens, or apostrophes",
          },
        })}
      />

      <Input
        type="email"
        label="Email"
        autoComplete="email"
        isError={errors.email}
        {...register("email", {
          required: { value: true, message: "Email is required" },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: "Enter a valid email address",
          },
        })}
      />

      <Input
        type="password"
        label="Password"
        autoComplete="new-password"
        isError={errors.password}
        {...register("password", {
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
          validate: (value) =>
            (/[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value)) ||
            "Must include uppercase, lowercase, and a number",
        })}
      />

      <Button disabled={isLoading} className="mt-3" type="submit">
        {isLoading ? (
          <Loader2
            size={30}
            className="text-primary-foreground scale-110 animate-spin"
          />
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
