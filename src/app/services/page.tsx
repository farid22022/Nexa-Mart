import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Air Freight",
      description:
        "Fast international cargo movement with real-time visibility.",
      href: "/air-freight",
    },
    {
      title: "Ocean Freight",
      description:
        "Global container shipping through major international ports.",
      href: "/ocean-freight",
    },
    {
      title: "Road Freight",
      description:
        "Domestic and regional transportation networks.",
      href: "/road-freight",
    },
    {
      title: "Rail Freight",
      description:
        "Efficient inland freight transportation solutions.",
      href: "/rail-freight",
    },
    {
      title: "Warehousing",
      description:
        "Smart inventory and fulfillment operations.",
      href: "/warehousing",
    },
    {
      title: "Customs Clearance",
      description:
        "Seamless import and export processing.",
      href: "/customs-clearance",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Logistics Services
          </h1>

          <p className="max-w-3xl text-lg text-muted-foreground">
            Integrated logistics solutions across air, ocean,
            rail, road, warehousing, customs, and supply chain
            operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border bg-card p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <Button asChild>
                <Link href={service.href}>
                  Explore
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics Flow Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Connected Logistics Ecosystem
          </h2>

          <p className="max-w-3xl text-muted-foreground">
            Every shipment flows through a unified logistics
            network connecting ports, airports, warehouses,
            distribution centers, and final-mile delivery.
          </p>
        </div>
      </section>
    </main>
  );
}