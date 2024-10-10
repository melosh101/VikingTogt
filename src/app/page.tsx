import { api, HydrateClient } from "~/trpc/server";
import ModelViewer from "./_components/ModelViewer";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <ModelViewer model="/Vikingeskjold.glb"/>
      </main>
    </HydrateClient>
  );
}
