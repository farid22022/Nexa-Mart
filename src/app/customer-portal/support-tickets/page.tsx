import { PageHero } from "@/components/enterprise/page-hero";

export default function SupportTicketsPage() {
  return (
    <main>

      <PageHero
        badge="SUPPORT"
        title="Support Tickets"
        description="Manage customer support requests."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="flex justify-between mb-8">

          <h2 className="text-2xl font-bold">
            Open Tickets
          </h2>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Create Ticket
          </button>

        </div>

        <div className="border rounded-xl p-8">
          Ticket Management System
        </div>

      </section>

    </main>
  );
}