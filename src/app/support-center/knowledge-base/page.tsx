import { PageHero } from "@/components/enterprise/page-hero";

const categories = [
  "Getting Started",
  "Shipment Management",
  "Tracking & Visibility",
  "Billing & Payments",
  "Warehousing",
  "Supply Chain Solutions",
  "Customs Clearance",
  "API Documentation",
];

export default function KnowledgeBasePage() {
  return (
    <main>
      <PageHero
        badge="KNOWLEDGE BASE"
        title="Knowledge Center"
        description="Documentation, guides, tutorials, and operational resources."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="mb-10">
          <input
            className="w-full border rounded-xl p-4"
            placeholder="Search articles..."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}