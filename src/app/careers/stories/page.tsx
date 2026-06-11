import { PageHero } from "@/components/enterprise/page-hero";

const stories = [
  {
    name: "Sarah Chen",
    role: "Supply Chain Manager",
    story:
      "Started as an analyst and now leads regional logistics operations.",
  },
  {
    name: "Ahmed Rahman",
    role: "Technology Lead",
    story:
      "Built AI-driven routing systems serving thousands of shipments daily.",
  },
  {
    name: "Emma Rodriguez",
    role: "Warehouse Operations Director",
    story:
      "Helped transform warehouse operations through automation.",
  },
];

export default function EmployeeStoriesPage() {
  return (
    <main>

      <PageHero
        badge="OUR PEOPLE"
        title="Employee Stories"
        description="Meet the people shaping the future of logistics."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-8">

          {stories.map((story) => (
            <div
              key={story.name}
              className="border rounded-xl p-6"
            >
              <div className="w-20 h-20 rounded-full bg-muted mb-6" />

              <h3 className="font-semibold text-xl">
                {story.name}
              </h3>

              <p className="text-red-600 mb-4">
                {story.role}
              </p>

              <p className="text-muted-foreground">
                {story.story}
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}