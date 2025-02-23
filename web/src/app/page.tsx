import { Button } from "./components/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-semibold font-heading">Title from this page</h1>
      <div>Hello world!</div>
      <Button text="Hello" />
      <Button />
    </main>
  );
}
