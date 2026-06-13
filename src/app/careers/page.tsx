import Link from "next/link";
import { ArrowRight, Briefcase, Gift, Heart, HelpCircle, Layers, PlayCircle, Star, Users } from "lucide-react";
import { PageHero } from "@/components/enterprise/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionReveal } from "@/components/motion-reveal";

export const metadata = {
  title: "Careers | Nexa Mart",
  description: "Join the team building the future of global commerce and logistics.",
};

const sections = [
  {
    icon: Briefcase,
    title: "Open Positions",
    description: "Explore opportunities to build the future of global logistics. Find a role that matches your skills.",
    href: "/careers/jobs",
    linkText: "View Open Roles",
  },
  {
    icon: Gift,
    title: "Benefits & Perks",
    description: "Discover our comprehensive benefits packages, health plans, professional growth budgets, and remote support.",
    href: "/careers/benefits",
    linkText: "See Our Benefits",
  },
  {
    icon: Layers,
    title: "Hiring Process",
    description: "Learn about our structured four-step hiring process from application review to offer letter.",
    href: "/careers/process",
    linkText: "How We Hire",
  },
  {
    icon: Users,
    title: "Employee Stories",
    description: "Hear from our engineers, operations analysts, and designers about what it is like to work at Nexa Mart.",
    href: "/careers/stories",
    linkText: "Read Stories",
  },
];

export default function CareersLandingPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="CAREERS"
        title="Build the Future of Logistics"
        description="We are a team of builders, designers, and logistics experts redefining how goods move across the globe. Find your next adventure here."
      />

      {/* Grid of Sections */}
      <section className="container-page pb-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={section.title} className="hover-lift border bg-card">
                <CardContent className="p-8 flex flex-col justify-between h-full min-h-[260px]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary mb-5">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {section.description}
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-fit group">
                    <Link href={section.href}>
                      {section.linkText}
                      <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Don't see the right role?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We are always looking for passionate builders. Submit a general application and we will keep you in mind for future openings.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Send General Application</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
