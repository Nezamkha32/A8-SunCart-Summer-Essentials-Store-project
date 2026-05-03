"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function LogInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      alert(error.message || "Login failed");
      return;
    }

    router.push("/");
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <Card className="border shadow-xl max-w-md w-full py-10 px-6">

        <h1 className="text-center text-3xl font-bold mb-6">
          Login to your account
        </h1>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase & 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <Button
              type="submit"
              className="flex-1"
              isLoading={loading}
            >
              <Check />
              Login
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="flex-1"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
        >
          <GrGoogle size={18} />
          Continue with Google
        </Button>

        {/* Register */}
        <p className="text-center text-sm mt-5">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary font-semibold">
            Register
          </a>
        </p>

      </Card>
    </div>
  );
}