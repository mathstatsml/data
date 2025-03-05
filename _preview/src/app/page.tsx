import { getData } from "~/lib/get-data";
import { Cytoscape } from "~/components/cytoscape";

export default function HomePage() {
  const elements = getData();

  return (
    <main className="h-screen w-screen">
      <Cytoscape elements={elements} />
    </main>
  );
}
