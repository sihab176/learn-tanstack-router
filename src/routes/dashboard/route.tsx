import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <>
      <h2>Dashboard Layout</h2>

      <hr />

      <Outlet />
    </>
  );
}