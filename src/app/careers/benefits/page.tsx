import { PageHero } from "@/components/enterprise/page-hero";

const benefits = [
  "Competitive Salary",
  "Performance Bonus",
  "Health Insurance",
  "Remote Work Opportunities",
  "Global Career Mobility",
  "Learning & Development",
  "Paid Leave",
  "Retirement Programs",
];

export default function BenefitsPage() {
  return (
    <main>

      <PageHero
        badge="EMPLOYEE BENEFITS"
        title="Benefits & Rewards"
        description="Supporting employees throughout their career journey."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="border rounded-xl p-6"
            >
              {benefit}
            </div>
          ))}

        </div>

        <div className="mt-16 border rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Why Join Us?
          </h2>

          <p className="text-muted-foreground">
            Work on large-scale logistics systems, global trade
            networks, AI-powered operations, and cutting-edge
            transportation technologies.
          </p>
        </div>

      </section>

    </main>
  );
}