import { PageHero } from "@/components/enterprise/page-hero";

const shipments = [
  {
    id: "SHP-1001",
    origin: "Singapore",
    destination: "Dhaka",
    status: "In Transit",
  },
  {
    id: "SHP-1002",
    origin: "Shanghai",
    destination: "Khulna",
    status: "Delivered",
  },
];

export default function ShipmentsPage() {
  return (
    <main>

      <PageHero
        badge="SHIPMENTS"
        title="My Shipments"
        description="Manage and monitor all logistics operations."
      />

      <section className="container mx-auto px-6 pb-24">

        <div className="border rounded-xl overflow-hidden">

          <table className="w-full">

            <thead className="border-b">
              <tr>
                <th className="text-left p-4">Shipment</th>
                <th className="text-left p-4">Origin</th>
                <th className="text-left p-4">Destination</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {shipments.map((shipment) => (
                <tr
                  key={shipment.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {shipment.id}
                  </td>

                  <td className="p-4">
                    {shipment.origin}
                  </td>

                  <td className="p-4">
                    {shipment.destination}
                  </td>

                  <td className="p-4">
                    {shipment.status}
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