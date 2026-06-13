export default function GlobalNetworkPage() {
  const locations = [
    "Singapore Hub",
    "Dubai Logistics Center",
    "Rotterdam Port",
    "Hamburg Terminal",
    "Shanghai Gateway",
    "Los Angeles Hub",
    "New York Distribution Center",
    "London Operations Center",
  ];

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">Global Network</h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          Connected ports, airports, warehouses, and distribution centers
          powering global trade.
        </p>

        <div className="h-[600px] rounded-2xl border overflow-hidden mb-12 bg-muted/20" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div key={location} className="border rounded-xl p-6">
              <h4 className="font-semibold">{location}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}