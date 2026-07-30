// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/patients/$patientId')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/patients/$patientId"!</div>
// }
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/patients/$patientId")({
  component: PatientDetails,
});

function PatientDetails() {
  const { patientId } = Route.useParams();

  return <h3>Patient ID : {patientId}</h3>;
}