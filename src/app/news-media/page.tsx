import Link from "next/link";
import { PageHero } from "@/components/enterprise/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Download, ExternalLink, Newspaper } from "lucide-react";

export const metadata = {
  title: "News & Media | Nexa Mart",
  description: "Stay up to date with the latest press releases, company news, and events from Nexa Mart.",
};

const articles = [
  {
    title: "Nexa Mart Expands Electric Delivery Fleet to 500 Vehicles",
    date: "June 10, 2026",
    category: "Sustainability",
    excerpt: "Nexa Mart takes a major step towards zero-emission logistics by deploying 500 new electric trucks and delivery vans across major metropolitan hubs.",
    href: "#",
  },
  {
    title: "Nexa Mart Partners with Port Authorities for Automated Cargo Sorting",
    date: "May 28, 2026",
    category: "Technology",
    excerpt: "A new collaboration introducing AI-driven container loading algorithms to reduce ocean shipping dwell times by 24%.",
    href: "#",
  },
  {
    title: "Q1 2026 Financial Results: Revenue Up 35% Year-Over-Year",
    date: "April 15, 2026",
    category: "Earnings",
    excerpt: "Nexa Mart announces strong financial performance driven by expanded SaaS warehouse management solutions and higher cross-border commerce volumes.",
    href: "#",
  },
  {
    title: "Nexa Mart Named Employer of the Year in Tech Logistics",
    date: "March 02, 2026",
    category: "Corporate",
    excerpt: "Recognized for outstanding workplace culture, extensive development programs, and leading remote-work support policies.",
    href: "#",
  },
];

const assets = [
  { name: "Nexa Mart Corporate Logo Pack", size: "4.2 MB", type: "ZIP" },
  { name: "Brand Guidelines PDF", size: "8.7 MB", type: "PDF" },
  { name: "Q1 2026 Presentation Slide Deck", size: "12.1 MB", type: "PDF" },
  { name: "Executive Team Photography", size: "22.5 MB", type: "ZIP" },
];

export default function NewsMediaPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="NEWS & MEDIA"
        title="Press Room & Resources"
        description="The latest updates, press releases, corporate announcements, and downloadable brand assets from Nexa Mart."
      />

      <div className="container-page pb-24 grid gap-12 lg:grid-cols-[1.8fr_1fr]">
        {/* Main News Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-b pb-4 flex items-center gap-2">
            <Newspaper className="size-6 text-primary" />
            Latest Articles
          </h2>
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover-lift border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="size-3.5" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary hover:text-primary-foreground flex items-center gap-1" asChild>
                    <Link href={article.href}>
                      Read Full Article <ExternalLink className="size-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sidebar Resources */}
        <aside className="space-y-8">
          {/* Brand Resources */}
          <div className="border rounded-xl bg-card p-6">
            <h2 className="text-2xl font-bold border-b pb-4 mb-4 flex items-center gap-2">
              <Download className="size-5 text-primary" />
              Media Resources
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Download official brand assets, executive bios, and documentation for media coverage.
            </p>
            <div className="space-y-3">
              {assets.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-background text-sm hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-xs text-muted-foreground">{asset.type} • {asset.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-primary" aria-label={`Download ${asset.name}`}>
                    <Download className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Media Contact */}
          <div className="border rounded-xl bg-card p-6 text-center space-y-4">
            <h3 className="text-xl font-bold">Media Relations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              For press inquiries, interview requests, or spokesperson statements, reach out to our media relations office.
            </p>
            <div className="text-sm">
              <p className="font-semibold text-primary">press@nexamart.com</p>
              <p className="text-muted-foreground mt-1">+880 (170) 555-0199</p>
            </div>
            <Button asChild className="w-full">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}
