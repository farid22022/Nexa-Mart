import Link from "next/link";
import { PageHero } from "@/components/enterprise/page-hero";

export default function CustomerPortalPage() {
  return (
    <main>

      <PageHero
        badge="CUSTOMER PORTAL"
        title="Welcome Back"
        description="Manage shipments, invoices, tracking and support from one place."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-4 gap-6 mb-12">

          <div className="border rounded-xl p-6">
            <div className="text-3xl font-bold">24</div>
            <div className="text-muted-foreground">
              Active Shipments
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <div className="text-3xl font-bold">6</div>
            <div className="text-muted-foreground">
              Pending Deliveries
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <div className="text-3xl font-bold">$18,420</div>
            <div className="text-muted-foreground">
              Monthly Spend
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <div className="text-3xl font-bold">3</div>
            <div className="text-muted-foreground">
              Open Tickets
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            href="/customer-portal/shipments"
            className="border rounded-xl p-6 hover:shadow-lg"
          >
            My Shipments
          </Link>

          <Link
            href="/customer-portal/live-tracking"
            className="border rounded-xl p-6 hover:shadow-lg"
          >
            Live Tracking
          </Link>

          <Link
            href="/customer-portal/documents"
            className="border rounded-xl p-6 hover:shadow-lg"
          >
            Documents
          </Link>

          <Link
            href="/customer-portal/support-tickets"
            className="border rounded-xl p-6 hover:shadow-lg"
          >
            Support Tickets
          </Link>

        </div>

      </section>

    </main>
  );
}