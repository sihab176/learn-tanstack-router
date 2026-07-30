import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/patients")({
  component: PatientLayout,
});

function PatientLayout() {
  return (
    <>
      <h2>Patient Module</h2>

      <Outlet />
    </>
  );
}