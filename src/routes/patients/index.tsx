import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/patients/')({
  component: PatientPage,
})

function PatientPage() {
  return <div>Hello "/patients/"!</div>
}
