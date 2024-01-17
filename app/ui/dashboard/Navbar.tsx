import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  // const { data } = useSession();
  // const user = data?.user;

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          TodoNextJS
        </Link>
        <div className="d-flex gap-4 align-items-center">
          {/* <strong>Hello {user?.email}</strong> */}
          <button className="btn btn-primary">Logout</button>
        </div>
      </div>
    </nav>
  );
}
