import { PageHero } from "@/components/enterprise/page-hero";

const documents = [
  {
    id: "DOC-1001",
    name: "Bill of Lading",
    date: "2026-06-10",
    type: "Shipping",
  },
  {
    id: "DOC-1002",
    name: "Commercial Invoice",
    date: "2026-06-08",
    type: "Finance",
  },
];

export default function DocumentsPage() {
  return (
    <main>
      <PageHero
        badge="DOCUMENT CENTER"
        title="Documents"
        description="Access shipment, customs, and financial documents."
      />

      <section className="container mx-auto px-6 pb-24">
        <div className="border rounded-xl overflow-hidden">

          <table className="w-full">

            <thead className="border-b">
              <tr>
                <th className="p-4 text-left">Document</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="p-4">{doc.name}</td>
                  <td className="p-4">{doc.type}</td>
                  <td className="p-4">{doc.date}</td>
                  <td className="p-4">
                    <button className="text-red-600">
                      Download
                    </button>
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