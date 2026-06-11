import { PageHero } from "@/components/enterprise/page-hero";

const jobs = [
  {
    id: "JOB-001",
    title: "Supply Chain Analyst",
    location: "Singapore",
    type: "Full Time",
  },
  {
    id: "JOB-002",
    title: "Logistics Operations Manager",
    location: "Dubai",
    type: "Full Time",
  },
  {
    id: "JOB-003",
    title: "Software Engineer (Logistics Platform)",
    location: "Remote",
    type: "Remote",
  },
  {
    id: "JOB-004",
    title: "Warehouse Automation Specialist",
    location: "Rotterdam",
    type: "Full Time",
  },
];

export default function JobsPage() {
  return (
    <main>

      <PageHero
        badge="CAREERS"
        title="Open Positions"
        description="Explore opportunities to build the future of global logistics."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="mb-8">
          <input
            className="w-full border rounded-xl p-4"
            placeholder="Search jobs..."
          />
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h3 className="text-xl font-semibold">
                    {job.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {job.location} • {job.type}
                  </p>
                </div>

                <button className="bg-red-600 text-white px-6 py-2 rounded-lg">
                  Apply
                </button>

              </div>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}