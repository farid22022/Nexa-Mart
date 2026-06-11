import { PageHero } from "@/components/enterprise/page-hero";

export default function NotificationsPage() {
  return (
    <main>

      <PageHero
        badge="ALERT CENTER"
        title="Notifications"
        description="Stay informed with shipment updates."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="space-y-4">

          <div className="border rounded-xl p-6">
            Shipment SHP-1001 reached Singapore Port
          </div>

          <div className="border rounded-xl p-6">
            Invoice INV-2026-100 has been paid
          </div>

          <div className="border rounded-xl p-6">
            Container ETA updated
          </div>

        </div>

      </section>

    </main>
  );
}