import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/user')({
  component: UserPage,
})

function UserPage() {
  return <div>Hello "/dashboard/user"!</div>
}
