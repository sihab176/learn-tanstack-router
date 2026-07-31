import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#383030",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
