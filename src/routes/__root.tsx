import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: 15,
          padding: 20,
          background: "#eee",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/patients">Patients</Link>

        <Link to="/billing">Billing</Link>

        <Link to="/login">Login</Link>
      </nav>

      <Outlet />
    </div>
  );
}
