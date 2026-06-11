import { PageHero } from "@/components/enterprise/page-hero";

export default function CustomerDashboardPage() {
  return (
    <main>

      <PageHero
        badge="CUSTOMER DASHBOARD"
        title="Operations Overview"
        description="Monitor logistics activity across all shipments."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-4 gap-6">

          <div className="border rounded-xl p-6">
            Revenue Analytics
          </div>

          <div className="border rounded-xl p-6">
            Shipment Analytics
          </div>

          <div className="border rounded-xl p-6">
            Delivery Performance
          </div>

          <div className="border rounded-xl p-6">
            Cost Analysis
          </div>

        </div>

        <div className="h-[500px] border rounded-xl mt-8 flex items-center justify-center">
          Customer Logistics Dashboard
        </div>

      </section>

    </main>
  );
}