import Link from "next/link";
import { PageHero } from "@/components/enterprise/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, HelpCircle, LifeBuoy, MessageSquare, Ticket } from "lucide-react";

export const metadata = {
  title: "Support Center | Nexa Mart",
  description: "Get help with shipping, orders, tracking, accounts, and integrations. Access FAQ, tickets, chat, and call scheduler.",
};

const options = [
  {
    icon: HelpCircle,
    title: "FAQ & Help Index",
    description: "Find instant answers to questions about order tracking, delivery schedules, return codes, and payment steps.",
    href: "/support-center/faq",
    linkText: "Read FAQs",
  },
  {
    icon: Ticket,
    title: "Support Tickets",
    description: "Submit a support query directly to our support desk and monitor responses in real time.",
    href: "/support-center/tickets",
    linkText: "Open Ticket",
  },
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    description: "Chat live with our automated chatbot assistant or connect instantly to a support specialist.",
    href: "/support-center/live-chat",
    linkText: "Start Chatting",
  },
  {
    icon: Calendar,
    title: "Call Scheduling",
    description: "Book a direct 1-on-1 technical callback with our engineering or account management team.",
    href: "/support-center/call-scheduling",
    linkText: "Schedule Call",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Explore our documentation on API integrations, webhook setups, customs compliance, and billing dashboards.",
    href: "/support-center/knowledge-base",
    linkText: "View Documentation",
  },
];

export default function SupportCenterPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="SUPPORT HUB"
        title="How can we help you?"
        description="Search our extensive knowledge database, raise a support request ticket, chat live with advisors, or schedule a custom call."
      />

      <section className="container-page pb-24">
        {/* Support Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index} className="hover-lift border bg-card flex flex-col justify-between">
                <CardContent className="p-8 space-y-6 flex flex-col justify-between h-full min-h-[250px]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {option.description}
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-fit group mt-auto">
                    <Link href={option.href}>
                      {option.linkText}
                      <ArrowRight className="ml-1.5 size-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}

          {/* Quick Helpline Card */}
          <Card className="border bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 flex flex-col justify-between p-8 min-h-[250px]">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <LifeBuoy className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Immediate Helpline</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you are facing an urgent critical shipment issue or cargo transit emergency, reach our hotline.
              </p>
            </div>
            <div className="text-sm mt-4">
              <p className="font-semibold text-primary">Hotline: +880 (132) 462-3709</p>
              <p className="text-xs text-muted-foreground mt-1">Available 24/7 for urgent corporate cases.</p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
