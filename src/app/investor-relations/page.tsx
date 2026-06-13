import Link from "next/link";
import { PageHero } from "@/components/enterprise/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, FileText, Globe, Landmark, Presentation, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Investor Relations | Nexa Mart",
  description: "Access Nexa Mart financial results, shareholder resources, governance details, and annual reports.",
};

const metrics = [
  { label: "Q1 2026 Revenue Growth", value: "+35%" },
  { label: "Gross Merchandise Value (GMV)", value: "$4.2B" },
  { label: "Active Enterprise Contracts", value: "850+" },
  { label: "Countries Connected", value: "120+" },
];

const filings = [
  { title: "2025 Annual Financial Report (10-K)", date: "March 12, 2026", type: "PDF" },
  { title: "Q1 2026 Earnings Slide Presentation", date: "April 15, 2026", type: "PPTX" },
  { title: "Q1 2026 Shareholder Update Letter", date: "April 15, 2026", type: "PDF" },
  { title: "Corporate Governance Charter", date: "Jan 10, 2026", type: "PDF" },
];

export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="INVESTOR RELATIONS"
        title="Shareholder & Financial Center"
        description="Access financial publications, earnings announcements, investor presentations, stock details, and corporate governance documents."
      />

      {/* Metrics Row */}
      <section className="container-page pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover-lift border bg-card">
              <CardContent className="p-6">
                <p className="text-4xl font-extrabold text-primary mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="container-page pb-24 grid gap-12 lg:grid-cols-[1.8fr_1fr]">
        {/* Left Section: Financial Reports */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-2">
            <Landmark className="size-6 text-primary" />
            SEC Filings & Publications
          </h2>
          <div className="space-y-4">
            {filings.map((filing, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-xl border bg-card hover:shadow-md transition-all gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{filing.title}</h3>
                    <p className="text-sm text-muted-foreground">Published: {filing.date} • {filing.type}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="group">
                  <Download className="size-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Download Report
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section: Events & Presentation */}
        <aside className="space-y-8">
          {/* Investor Presentations */}
          <div className="border rounded-xl bg-card p-6">
            <h3 className="text-xl font-bold border-b pb-4 mb-4 flex items-center gap-2">
              <Presentation className="size-5 text-primary" />
              Latest Presentation
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Read our general investor slides summarizing Nexa Mart’s long-term business strategy, market opportunities, and digital transformation initiatives.
            </p>
            <Button className="w-full flex items-center gap-2" variant="default">
              <Download className="size-4" /> Download Investor Deck
            </Button>
          </div>

          {/* Contact Investor Relations */}
          <div className="border rounded-xl bg-card p-6 space-y-4">
            <h3 className="text-xl font-bold border-b pb-4 flex items-center gap-2">
              <Globe className="size-5 text-primary" />
              IR Contacts
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you have queries regarding Nexa Mart shares, dividend distributions, or financial reports, please contact our Shareholder Relations desk.
            </p>
            <div className="text-sm space-y-2">
              <p><span className="font-semibold text-muted-foreground">Email:</span> ir@nexamart.com</p>
              <p><span className="font-semibold text-muted-foreground">Office:</span> Dhaka Logistics Center, Level 8</p>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact">Send Inquiry</Link>
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}
