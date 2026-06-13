import Link from "next/link";
import { PageHero } from "@/components/enterprise/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart2, BookOpen, Clock, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Case Studies | Nexa Mart",
  description: "Read real-world logistics success stories. See how Nexa Mart optimizes supply chains, warehousing, and deliveries.",
};

const stories = [
  {
    client: "ElectroWorld Group",
    industry: "Retail & Electronics",
    title: "Optimizing Omni-channel Distribution and Delivery Speeds by 40%",
    summary: "How a leading consumer electronics retailer integrated Nexa Mart's warehouse management system (WMS) and automated road dispatch fleet to scale Q4 peak operations.",
    metric: "40% faster shipping",
    icon: Zap,
  },
  {
    client: "MedLink Therapeutics",
    industry: "Healthcare & Biotech",
    title: "Ensuring Cold-Chain Logistics Integrity for Temperature-Sensitive Cargo",
    summary: "Implementing real-time temperature tracking alerts and priority air cargo services to secure the transport of pharmaceuticals across 15 global hubs.",
    metric: "100% compliant delivery",
    icon: ShieldCheck,
  },
  {
    client: "Apex Manufacturing Co.",
    industry: "Heavy Industry",
    title: "Overcoming Global Port Congestion with AI Route Re-planning Engine",
    summary: "Apex avoided supply chain downtime during shipping canal disruptions by switching routes automatically using Nexa Mart's AI recommendation models.",
    metric: "$2.4M saved in penalties",
    icon: BarChart2,
  },
  {
    client: "FreshMart Express",
    industry: "E-Commerce",
    title: "Slashing Last-Mile Dispatch Costs and Optimizing Delivery Routing",
    summary: "Deploying automated dispatcher assignment algorithms to achieve high driver density and reduce average cost per drop across metropolitan centers.",
    metric: "18% delivery cost drop",
    icon: Clock,
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="CASE STUDIES"
        title="Stories of Global Impact"
        description="See how Nexa Mart enables enterprise customers, marketplace vendors, and global brands to optimize logistics and scale operations."
      />

      <section className="container-page pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <Card key={index} className="hover-lift border bg-card flex flex-col justify-between">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <Badge variant="secondary">{story.industry}</Badge>
                    <span className="text-sm font-semibold text-primary">{story.client}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {story.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Icon className="size-5" />
                      <span>{story.metric}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group text-sm font-semibold hover:text-primary">
                      Read Case Study
                      <ArrowRight className="ml-1.5 size-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Global Stats Callout */}
        <div className="mt-20 border rounded-2xl p-8 bg-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              Need an Enterprise Case Study?
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl">
              We compile tailored technical breakdowns for logistics optimization. Contact our advisory group for bespoke research data.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Request Advisors</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
