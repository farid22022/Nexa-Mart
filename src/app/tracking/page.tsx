import { Bike, Clock3, MapPin, Navigation, PackageCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trackingSteps = [
  "Order Confirmed",
  "Packed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

export default function TrackingPage() {
  return (
    <div className="container-page py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-primary">Live order tracking</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Order ORD-91824
          </h1>
          <p className="mt-2 text-muted-foreground">
            Interactive route UI with rider location, ETA, current status, and
            progress timeline.
          </p>
        </div>
        <Badge className="w-fit">Out For Delivery</Badge>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="relative min-h-[560px] overflow-hidden rounded-lg border bg-card surface-line">
          <div className="absolute left-[12%] top-[18%] flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm shadow-sm">
            <MapPin className="size-4 text-primary" />
            Warehouse
          </div>
          <div className="absolute right-[12%] bottom-[16%] flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm shadow-sm">
            <PackageCheck className="size-4 text-primary" />
            Delivery address
          </div>
          <div className="absolute left-[23%] top-[32%] h-[3px] w-[56%] rotate-[28deg] rounded-full bg-primary" />
          <div className="absolute left-[53%] top-[44%] grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl">
            <Bike className="size-7" />
          </div>
          <div className="absolute bottom-5 left-5 flex gap-2">
            <Button variant="secondary">
              <Navigation />
              Recenter
            </Button>
            <Button variant="outline">Route info</Button>
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estimated delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Clock3 className="size-8 text-primary" />
                <div>
                  <p className="text-3xl font-semibold">24 min</p>
                  <p className="text-sm text-muted-foreground">
                    Rider is 3.4 km away
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trackingSteps.map((step, index) => (
                <div key={step} className="flex gap-3">
                  <span className="mt-1 grid size-6 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">{step}</p>
                    <p className="text-sm text-muted-foreground">
                      {index < 4 ? "Completed" : "Next milestone"}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
