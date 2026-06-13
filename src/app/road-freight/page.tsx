import { Truck, Map, Eye, UserCircle } from "lucide-react";

const services = [
  {
    title: "Last Mile Delivery",
    icon: Truck,
    description: "Fast and reliable customer delivery operations.",
  },
  {
    title: "Regional Distribution",
    icon: Map,
    description: "Multi-region transportation coverage and scheduling.",
  },
  {
    title: "Fleet Visibility",
    icon: Eye,
    description: "Real-time GPS tracking and operational insights.",
  },
  {
    title: "Driver Monitoring",
    icon: UserCircle,
    description: "Performance, safety, and compliance tracking.",
  },
];

export default function RoadFreightPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <span className="text-red-600 font-semibold">
          ROAD TRANSPORT NETWORK
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">Road Freight Services</h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          End-to-end transportation with fleet visibility, route optimization,
          and last-mile delivery excellence.
        </p>

        <div className="h-[500px] border rounded-xl overflow-hidden mb-16 bg-muted/20" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <service.icon className="w-10 h-10 mb-4 text-red-600" />

              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>

              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Fleet Monitoring Dashboard</h2>

          <p className="text-muted-foreground">
            Track active vehicles, delivery progress, route efficiency, fuel
            consumption, and driver performance.
          </p>
        </div>
      </section>
    </main>
  );
}