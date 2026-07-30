import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/patients/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/patients/create"!</div>
}
