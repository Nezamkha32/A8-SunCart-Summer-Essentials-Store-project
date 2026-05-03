"use client";

import { authClient } from "@/lib/auth-client";
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
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    setErrorMessage("");

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message || "Registration failed");
      return;
    }

    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">

      <Card className="border shadow-xl max-w-md w-full py-10 px-6">

        <h1 className="text-center text-3xl font-bold mb-6">
          Create Account
        </h1>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-3">
            {errorMessage}
          </p>
        )}

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image">
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
            <FieldError />
          </TextField>

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

          <div className="flex gap-3 mt-2">

            <Button type="submit" className="flex-1" isLoading={loading}>
              <Check />
              Register
            </Button>

            <Button type="reset" variant="secondary" className="flex-1">
              Reset
            </Button>

          </div>

        </Form>

        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>

      </Card>

    </div>
  );
}