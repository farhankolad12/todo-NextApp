import "@/app/globals.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-light p-5">
      <h3>Please login to continue</h3>
      <form className="d-flex flex-column gap-4 mt-4">
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
    </div>
  );
}
