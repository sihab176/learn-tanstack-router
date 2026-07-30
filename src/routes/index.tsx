import { createFileRoute } from '@tanstack/react-router'
// import { createFileRoute } from "@tanstack/react-router";

// export const Route = createFileRoute("/")({
//   component: Home,
// });

// function Home() {
//   return <h2>Home Page</h2>;
// }

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return <div>Hello</div>
}