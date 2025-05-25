export const meta = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Home page of the Remix App!" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}
