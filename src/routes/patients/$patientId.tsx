
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/patients/$patientId")({
  component: PatientDetails,
});

function PatientDetails() {
  const { patientId } = Route.useParams();

  return <h3>Patient ID : {patientId}</h3>;
}