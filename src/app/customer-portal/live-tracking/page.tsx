import { PageHero } from "@/components/enterprise/page-hero";

export default function LiveTrackingPage() {
  return (
    <main>

      <PageHero
        badge="REAL-TIME TRACKING"
        title="Live Tracking"
        description="Track containers, vehicles and shipments globally."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="h-[650px] border rounded-xl flex items-center justify-center">
          Interactive Logistics Map
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="border rounded-xl p-6">
            Truck Tracking
          </div>

          <div className="border rounded-xl p-6">
            Ship Tracking
          </div>

          <div className="border rounded-xl p-6">
            Air Tracking
          </div>

          <div className="border rounded-xl p-6">
            Rail Tracking
          </div>

        </div>

      </section>

    </main>
  );
}