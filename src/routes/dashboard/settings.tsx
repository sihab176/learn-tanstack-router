import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings')({
  component: Settings,
})

function Settings() {
  return <div>Hello "/dashboard/settings"!</div>
}
