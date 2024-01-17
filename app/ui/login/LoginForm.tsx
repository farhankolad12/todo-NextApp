"use client";

import { login } from "@/app/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="d-flex flex-column gap-4 mt-4">
      {state?.error ? (
        <strong className=" text-center text-danger">{state.error}</strong>
      ) : (
        ""
      )}
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
      <button type="submit" className="btn btn-primary ms-3">
        Log in
      </button>
      <span className="text-center">
        Don't have an account?{" "}
        <Link href="/signup" className="text-bold text-decoration-none">
          Register
        </Link>
      </span>
    </form>
  );
}
