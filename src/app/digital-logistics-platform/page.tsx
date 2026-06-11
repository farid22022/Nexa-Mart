import { PageHero } from "@/components/enterprise/page-hero";

export default function DigitalLogisticsPlatformPage() {
  return (
    <main className="min-h-screen">

      <PageHero
        badge="LOGISTICS CONTROL CENTER"
        title="Digital Logistics Platform"
        description="Enterprise-grade SaaS platform for complete logistics visibility."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-6 mb-12">

          <div className="border rounded-xl p-6">
            Fleet Monitoring
          </div>

          <div className="border rounded-xl p-6">
            Shipment Monitoring
          </div>

          <div className="border rounded-xl p-6">
            AI Recommendations
          </div>

          <div className="border rounded-xl p-6">
            Revenue Analytics
          </div>

          <div className="border rounded-xl p-6">
            Carbon Analytics
          </div>

          <div className="border rounded-xl p-6">
            Route Optimization
          </div>

        </div>

        <div className="border rounded-xl overflow-hidden">

          <div className="p-8 border-b">
            Revenue Analytics
          </div>

          <div className="p-8 border-b">
            Fleet Utilization
          </div>

          <div className="p-8 border-b">
            Shipment Status Distribution
          </div>

          <div className="p-8">
            Carbon Emissions Tracking
          </div>

        </div>

      </section>

    </main>
  );
}