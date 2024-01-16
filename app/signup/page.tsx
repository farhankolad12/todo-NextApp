"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { register } from "@/app/lib/actions";
import { useEffect } from "react";

export default function Page() {
  const [state, formAction] = useFormState(register, undefined);

  console.log(state);

  useEffect(() => {
    state?.success && alert("User Registered!");
  }, [state?.success]);

  return (
    <div className="bg-light p-5 ">
      <h3>Please Signup to continue</h3>
      <form action={formAction} className="d-flex flex-column gap-4 mt-4 ">
        <div className="d-flex flex-column gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary ms-3">
          Sign up
        </button>
        <span className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-bold text-decoration-none">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}
