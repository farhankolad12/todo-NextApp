"use client";

import "@/app/globals.css";
import LoginForm from "../ui/login/LoginForm";

export default function Page() {
  return (
    <div className="bg-light p-5">
      <h3>Please login to continue</h3>
      <LoginForm />
    </div>
  );
}
