import Link from "next/link";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "E-Commerce",
    description: "Fast fulfillment and last-mile delivery."
  },
  {
    title: "Manufacturing",
    description: "End-to-end supply chain visibility."
  },
  {
    title: "Healthcare",
    description: "Temperature-controlled logistics."
  },
  {
    title: "Technology",
    description: "Secure transport for high-value equipment."
  },
  {
    title: "Automotive",
    description: "Parts distribution and inventory management."
  },
  {
    title: "Retail",
    description: "Scalable omnichannel logistics."
  },
  {
    title: "Agriculture",
    description: "Cold-chain and bulk transportation."
  },
  {
    title: "Energy",
    description: "Project cargo and heavy-lift logistics."
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">
          Industries We Serve
        </h1>

        <p className="max-w-3xl text-muted-foreground mb-16">
          Industry-specific logistics solutions built for speed,
          reliability, visibility, and global scalability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="border rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h3 className="font-semibold text-xl mb-3">
                {industry.title}
              </h3>

              <p className="text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Button asChild>
            <Link href="/contact">
              Request Consultation
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}