import Link from "next/link";
import { PageHero } from "@/components/enterprise/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing Plans | Nexa Mart",
  description: "Flexible enterprise and merchant logistics pricing plans. Choose a plan that suits your shipment scale.",
};

const plans = [
  {
    name: "Starter Merchant",
    price: "$49",
    billing: "per month",
    description: "Great for individual sellers and small boutique stores starting with e-commerce fulfillment.",
    features: [
      "Up to 150 monthly shipments",
      "Standard warehouse storage",
      "API integrations (Shopify, WooCommerce)",
      "Standard road freight delivery",
      "Email support (24 hour response)",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth Business",
    price: "$199",
    billing: "per month",
    description: "Ideal for growing brands requiring faster delivery networks and automated warehouse sorting.",
    features: [
      "Up to 1,000 monthly shipments",
      "Smart warehouse sorting priority",
      "Full API & Webhook integrations",
      "Priority road & rail freight access",
      "Dedicated account manager",
      "24/7 Phone & Email support",
    ],
    cta: "Upgrade to Growth",
    popular: true,
  },
  {
    name: "Enterprise Global",
    price: "Custom",
    billing: "contact sales",
    description: "Custom solutions for large corporations, global suppliers, and heavy freight requirements.",
    features: [
      "Unlimited shipments",
      "Multi-region smart warehousing",
      "Dedicated air & ocean cargo slots",
      "Custom customs clearance handling",
      "Real-time IoT sensor telemetry",
      "SLA guaranteed uptime",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="PRICING PLANS"
        title="Predictable, Scalable Pricing"
        description="Choose the right logistics, storage, and marketplace pricing tier tailored for your supply chain volume."
      />

      <section className="container-page pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`hover-lift border bg-card flex flex-col justify-between h-full relative ${
                plan.popular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="px-8 pb-8 pt-0">
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/{plan.billing}</span>
                  </div>

                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="size-5 shrink-0 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <div className="p-8 border-t bg-muted/20">
                <Button asChild className="w-full font-semibold" variant={plan.popular ? "default" : "outline"}>
                  <Link href={plan.price === "Custom" ? "/contact" : "/register"}>{plan.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
