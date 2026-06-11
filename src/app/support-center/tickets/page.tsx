import { PageHero } from "@/components/enterprise/page-hero";

const tickets = [
  {
    id: "TKT-1001",
    subject: "Shipment Delay",
    status: "Open",
  },
  {
    id: "TKT-1002",
    subject: "Invoice Inquiry",
    status: "Resolved",
  },
  {
    id: "TKT-1003",
    subject: "Document Request",
    status: "In Progress",
  },
];

export default function TicketsPage() {
  return (
    <main>

      <PageHero
        badge="SUPPORT TICKETS"
        title="Ticket Management"
        description="Track and manage all support requests."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="flex justify-between mb-8">

          <h2 className="text-2xl font-bold">
            Active Tickets
          </h2>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            New Ticket
          </button>

        </div>

        <div className="border rounded-xl overflow-hidden">

          <table className="w-full">

            <thead className="border-b">
              <tr>
                <th className="text-left p-4">
                  Ticket ID
                </th>
                <th className="text-left p-4">
                  Subject
                </th>
                <th className="text-left p-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {ticket.id}
                  </td>

                  <td className="p-4">
                    {ticket.subject}
                  </td>

                  <td className="p-4">
                    {ticket.status}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}