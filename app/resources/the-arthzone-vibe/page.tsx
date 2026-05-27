import ComingSoonPage from "@/components/coming-soon-page";

export const metadata = {
  title: "The Arthzone Vibe | Arthzone Technologies",
  description:
    "A look inside Arthzone Technologies culture, work style, product thinking, and team energy.",
};

export default function ArthzoneVibePage() {
  return (
    <ComingSoonPage
      eyebrow="Culture"
      title="The Work Culture Behind Arthzone"
      description="This page is being refined to show how our team thinks, builds, collaborates, and ships software solutions with care."
      highlights={["Builder mindset", "Client clarity", "Creative execution"]}
    />
  );
}
