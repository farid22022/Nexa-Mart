import { PageHero } from "@/components/enterprise/page-hero";

export default function CallSchedulingPage() {
  return (
    <main>

      <PageHero
        badge="CALL SCHEDULING"
        title="Book a Consultation"
        description="Schedule a call with logistics specialists."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="border rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Schedule a Call
            </h2>

            <div className="space-y-4">

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Full Name"
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Email Address"
              />

              <input
                type="date"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="time"
                className="w-full border rounded-lg p-3"
              />

              <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
                Schedule Meeting
              </button>

            </div>

          </div>

          <div className="border rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Available Services
            </h2>

            <ul className="space-y-4">
              <li>Supply Chain Consultation</li>
              <li>Customs Compliance Review</li>
              <li>Freight Planning</li>
              <li>Warehouse Solutions</li>
              <li>Technology Integration</li>
            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}