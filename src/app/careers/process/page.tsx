import { PageHero } from "@/components/enterprise/page-hero";

const steps = [
  {
    title: "Application",
    description:
      "Submit your application through our careers portal.",
  },
  {
    title: "Screening",
    description:
      "Initial review by our recruitment team.",
  },
  {
    title: "Interview",
    description:
      "Meet hiring managers and team members.",
  },
  {
    title: "Assessment",
    description:
      "Role-specific evaluation and problem-solving exercises.",
  },
  {
    title: "Offer",
    description:
      "Receive your employment offer and onboarding plan.",
  },
];

export default function RecruitmentProcessPage() {
  return (
    <main>

      <PageHero
        badge="HIRING PROCESS"
        title="Recruitment Journey"
        description="A transparent and efficient recruitment experience."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="space-y-8">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="border rounded-xl p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-16 border rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join?
          </h2>

          <button className="bg-red-600 text-white px-8 py-3 rounded-lg">
            View Open Positions
          </button>
        </div>

      </section>

    </main>
  );
}