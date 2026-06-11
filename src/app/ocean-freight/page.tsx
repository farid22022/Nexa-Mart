import { Ship, Container, Anchor, Globe } from "lucide-react";

const services = [
  {
    title: "FCL Shipping",
    description: "Dedicated full-container shipping solutions.",
    icon: Container,
  },
  {
    title: "LCL Shipping",
    description: "Cost-efficient shared container transportation.",
    icon: Ship,
  },
  {
    title: "Reefer Containers",
    description: "Temperature-controlled ocean freight services.",
    icon: Anchor,
  },
  {
    title: "Project Cargo",
    description: "Heavy-lift and oversized cargo management.",
    icon: Globe,
  },
];

export default function OceanFreightPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">

        <span className="text-red-600 font-semibold">
          GLOBAL OCEAN NETWORK
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Ocean Freight Solutions
        </h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          Reliable international container shipping connecting major ports
          and trade routes worldwide.
        </p>

        <div className="h-[500px] border rounded-xl flex items-center justify-center mb-16">
          3D Smart Port & Container Terminal
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-6"
            >
              <service.icon className="w-10 h-10 mb-4 text-red-600" />

              <h3 className="font-semibold text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Port-to-Port Tracking
          </h2>

          <p className="text-muted-foreground">
            Monitor vessel location, ETA predictions, customs status,
            and container milestones in real time.
          </p>
        </div>

      </section>
    </main>
  );
}