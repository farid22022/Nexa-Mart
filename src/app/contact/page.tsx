"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/enterprise/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for reaching out! We will contact you shortly.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  const offices = [
    {
      city: "Dhaka, Bangladesh",
      address: "Logistics Center, House 24, Road 7, Banani",
      phone: "+880 132 462 3709",
      email: "dhaka@nexamart.com",
    },
    {
      city: "Singapore",
      address: "Changi Air Logistics Park, Block B, #04-12",
      phone: "+65 6789 0122",
      email: "singapore@nexamart.com",
    },
    {
      city: "Rotterdam, Netherlands",
      address: "Port Terminal Gate 5, Waalhaven Zuidzijde",
      phone: "+31 10 567 8900",
      email: "rotterdam@nexamart.com",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        badge="CONTACT US"
        title="Get in Touch"
        description="Have a question about our marketplace, logistics services, or corporate solutions? Fill out the form or reach our global offices."
      />

      <div className="container-page pb-24 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Contact Form */}
        <section className="space-y-6">
          <Card className="border bg-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2">
                  <Send className="size-4" />
                  {isSubmitting ? "Sending message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Global Offices Info */}
        <section className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Global Offices</h2>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="p-5 border rounded-xl bg-card space-y-3">
                  <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                    <MapPin className="size-5" />
                    {office.city}
                  </h3>
                  <div className="text-sm space-y-2 text-muted-foreground pl-7">
                    <p>{office.address}</p>
                    <p className="flex items-center gap-2">
                      <Phone className="size-4 text-muted-foreground" />
                      {office.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="size-4 text-muted-foreground" />
                      {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
