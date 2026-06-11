"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TrackingCenterPage() {
  const [trackingId, setTrackingId] = useState("");

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">
          Tracking Center
        </h1>

        <p className="max-w-3xl text-muted-foreground mb-12">
          Track shipments, containers, aircraft cargo,
          rail freight, and road transportation in real time.
        </p>

        <div className="flex gap-4 mb-12">
          <Input
            placeholder="Enter Tracking Number"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />

          <Button>
            Track Shipment
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-4">
              Shipment Status
            </h3>

            <p>In Transit</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-4">
              Estimated Arrival
            </h3>

            <p>18 Hours Remaining</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-4">
              Current Location
            </h3>

            <p>Singapore Logistics Hub</p>
          </div>
        </div>

        <div className="h-[500px] mt-12 border rounded-xl flex items-center justify-center">
          Live Tracking Map
        </div>
      </section>
    </main>
  );
}