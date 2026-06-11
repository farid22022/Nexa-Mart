import { PageHero } from "@/components/enterprise/page-hero";

export default function AnalyticsPage() {
  return (
    <main>

      <PageHero
        badge="ANALYTICS"
        title="Logistics Analytics"
        description="Monitor operational performance."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-4 gap-6 mb-8">

          <div className="border rounded-xl p-6">
            On-Time Delivery
          </div>

          <div className="border rounded-xl p-6">
            Shipping Cost
          </div>

          <div className="border rounded-xl p-6">
            Carbon Impact
          </div>

          <div className="border rounded-xl p-6">
            Route Efficiency
          </div>

        </div>

        <div className="h-[600px] border rounded-xl flex items-center justify-center">
          Logistics Analytics Dashboard
        </div>

      </section>

    </main>
  );
}