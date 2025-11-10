import { HeroSection } from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Picosecond - Serious making ui components for building software",
      description:
        "A beautiful and serious making ui component for startups and enterprises for building scalable software",
    }),
  }),
  component: Page,
});

function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
