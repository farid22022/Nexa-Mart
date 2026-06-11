import {
  FileCheck,
  Globe,
  ShieldCheck,
  Calculator,
  Truck,
  FileText,
} from "lucide-react";

const services = [
  {
    title: "Import Clearance",
    description:
      "Fast and compliant import processing across global markets.",
    icon: Globe,
  },
  {
    title: "Export Clearance",
    description:
      "Streamlined export documentation and customs approval.",
    icon: Truck,
  },
  {
    title: "Documentation",
    description:
      "Automated customs forms, declarations, and compliance records.",
    icon: FileText,
  },
  {
    title: "Duty Calculation",
    description:
      "Accurate tax, tariff, and duty estimations.",
    icon: Calculator,
  },
  {
    title: "Trade Compliance",
    description:
      "Regulatory compliance management and audit readiness.",
    icon: ShieldCheck,
  },
  {
    title: "Cross Border Services",
    description:
      "Efficient customs coordination across international borders.",
    icon: FileCheck,
  },
];

const stats = [
  {
    title: "Countries Covered",
    value: "95+",
  },
  {
    title: "Support",
    value: "24/7",
  },
  {
    title: "Clearance Rate",
    value: "99.2%",
  },
  {
    title: "Monthly Shipments",
    value: "50K+",
  },
];

export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <span className="text-red-600 font-semibold">
          GLOBAL CUSTOMS SOLUTIONS
        </span>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Customs Clearance
        </h1>

        <p className="max-w-3xl text-muted-foreground">
          Simplify international trade with customs expertise,
          automated documentation, compliance monitoring,
          and global regulatory support.
        </p>
      </section>

      {/* KPI Cards */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-red-600">
                {item.value}
              </div>

              <div className="mt-2 text-muted-foreground">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customs Visualization */}
      <section className="container mx-auto px-6 pb-16">
        <div className="h-[500px] border rounded-xl flex items-center justify-center">
          Global Customs Network Visualization
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <service.icon className="w-10 h-10 text-red-600 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Coverage */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Global Compliance Coverage
          </h2>

          <p className="max-w-3xl text-muted-foreground">
            Operate confidently across multiple jurisdictions with
            real-time regulatory monitoring, trade compliance,
            customs intelligence, and border management solutions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Simplify International Trade
        </h2>

        <p className="text-muted-foreground mb-8">
          Let our customs specialists handle compliance while you
          focus on growing your business.
        </p>

        <button className="bg-red-600 text-white px-8 py-3 rounded-lg">
          Request Consultation
        </button>
      </section>

    </main>
  );
}