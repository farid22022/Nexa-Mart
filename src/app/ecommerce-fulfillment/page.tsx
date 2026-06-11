import {
  ShoppingCart,
  Package,
  Boxes,
  Store,
  Truck,
  RotateCcw,
} from "lucide-react";

import { PageHero } from "@/components/enterprise/page-hero";
import { FeatureCard } from "@/components/enterprise/feature-card";

const features = [
  {
    title: "Order Processing",
    description:
      "Automated order capture and fulfillment workflows.",
    icon: ShoppingCart,
  },
  {
    title: "Pick & Pack",
    description:
      "Efficient warehouse picking and packaging.",
    icon: Package,
  },
  {
    title: "Inventory Sync",
    description:
      "Real-time inventory synchronization.",
    icon: Boxes,
  },
  {
    title: "Marketplace Integration",
    description:
      "Connect all major marketplaces.",
    icon: Store,
  },
  {
    title: "Last Mile Delivery",
    description:
      "Fast final-mile distribution.",
    icon: Truck,
  },
  {
    title: "Returns Management",
    description:
      "Streamlined reverse logistics.",
    icon: RotateCcw,
  },
];

const marketplaces = [
  "Amazon",
  "Shopify",
  "WooCommerce",
  "eBay",
  "Magento",
  "TikTok Shop",
  "Daraz",
];

export default function EcommerceFulfillmentPage() {
  return (
    <main className="min-h-screen">

      <PageHero
        badge="E-COMMERCE LOGISTICS"
        title="E-Commerce Fulfillment"
        description="Scale online operations with inventory, fulfillment, delivery, and returns management."
      />

      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Marketplace Integrations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {marketplaces.map((market) => (
            <div
              key={market}
              className="border rounded-xl p-6 text-center"
            >
              {market}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">
          Order Journey
        </h2>

        <div className="border rounded-xl p-10 text-center space-y-4">
          <div>Customer Order</div>
          <div>↓</div>
          <div>Warehouse Pick</div>
          <div>↓</div>
          <div>Packing</div>
          <div>↓</div>
          <div>Sorting</div>
          <div>↓</div>
          <div>Carrier Assignment</div>
          <div>↓</div>
          <div>Last Mile</div>
          <div>↓</div>
          <div className="font-bold text-green-600">
            Delivered
          </div>
        </div>
      </section>

    </main>
  );
}