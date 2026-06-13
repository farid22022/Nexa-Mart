"use client";

import { useState } from "react";
import { PageHero } from "@/components/enterprise/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Search, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    category: "Logistics & Shipping",
    items: [
      {
        question: "How do I track my shipment?",
        answer: "You can track your shipment in real-time by entering your tracking number in the Tracking Center, or by logging into the Customer Portal and navigating to the Live Tracking tab.",
      },
      {
        question: "What is your typical delivery window?",
        answer: "Standard ground freight takes 24–72 hours domestically. Air cargo arrives within 48 hours globally, while ocean cargo timelines depend on port-of-entry routes (typically 10–25 days).",
      },
      {
        question: "Do you handle customs clearance?",
        answer: "Yes, our customs clearance page offers seamless automated import/export declaration processing, tax calculation, and document validation at major international entry hubs.",
      },
    ],
  },
  {
    category: "Payments & Invoicing",
    items: [
      {
        question: "Which payment options do you support?",
        answer: "We support major credit cards (Visa, MasterCard, Amex), corporate bank wire transfers, and localized digital wallets. We also provide invoice-based credit lines for qualified enterprise accounts.",
      },
      {
        question: "Where can I view my billing history?",
        answer: "All invoices and past transaction payments are stored securely under Customer Portal → Invoices. You can view, download, or pay outstanding statements directly.",
      },
    ],
  },
  {
    category: "Merchant & Selling",
    items: [
      {
        question: "How do I register as a seller?",
        answer: "Visit our registration page, select the 'Seller' role, and fill in your business tax registration details. Once verified, you will gain access to the Vendor Panel dashboard to list items.",
      },
      {
        question: "What are your storage fulfillment fees?",
        answer: "Fulfillment fees vary based on stock size, warehousing duration, and packing requirements. Please refer to our Pricing page or consult a warehouse agent for a quote.",
      },
    ],
  },
];

export default function FAQLandingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  const filteredFaqs = faqCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(
      item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0);

  return (
    <main className="min-h-screen">
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Search our resource directory to find answers about tracking, billing, custom clearances, and selling on Nexa Mart."
      />

      <section className="container-page pb-24 max-w-4xl">
        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input
            className="pl-12 py-6 text-base rounded-xl"
            placeholder="Search questions by keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          {filteredFaqs.length === 0 ? (
            <Card className="text-center p-10 border bg-card">
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">No questions found matching your keywords.</p>
                <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
              </CardContent>
            </Card>
          ) : (
            filteredFaqs.map((categoryGroup, catIndex) => (
              <div key={catIndex} className="space-y-4">
                <h2 className="text-xl font-bold text-primary pl-1">{categoryGroup.category}</h2>
                <div className="space-y-3">
                  {categoryGroup.items.map((item, itemIndex) => {
                    const uniqueId = `${catIndex}-${itemIndex}`;
                    const isExpanded = expandedIndex === uniqueId;
                    return (
                      <div
                        key={itemIndex}
                        className="border rounded-xl bg-card overflow-hidden transition-all duration-300 hover:shadow-sm"
                      >
                        <button
                          onClick={() => toggleExpand(uniqueId)}
                          className="w-full flex items-center justify-between p-5 text-left font-semibold text-lg text-foreground hover:text-primary transition-colors focus:outline-none"
                        >
                          <span>{item.question}</span>
                          {isExpanded ? (
                            <ChevronUp className="size-5 text-primary shrink-0 ml-4" />
                          ) : (
                            <ChevronDown className="size-5 text-muted-foreground shrink-0 ml-4" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 border-t text-muted-foreground text-sm leading-relaxed animate-fade-in">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Call to Action Support */}
        <div className="mt-16 text-center border rounded-2xl bg-card p-8 max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold flex items-center justify-center gap-2">
            <MessageSquare className="size-5 text-primary" />
            Still have questions?
          </h3>
          <p className="text-muted-foreground text-sm">
            If you cannot find the answer to your shipping or account query, feel free to open a ticket or talk to our live assistant.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild variant="outline">
              <Link href="/support-center/tickets">Open Ticket</Link>
            </Button>
            <Button asChild>
              <Link href="/support-center/live-chat">Start Live Chat</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
