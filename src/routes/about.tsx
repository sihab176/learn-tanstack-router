import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      {/* <Link to="/">Home</Link>
      {" | "}
      <Link to="/about">About</Link> */}
      <h2>About Page</h2>;
    </>
  );
}
