import Link from "next/link";
import { CreditCard, Home, PackageCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const steps = [
  { label: "Shipping Address", icon: Home },
  { label: "Delivery Method", icon: Truck },
  { label: "Payment Method", icon: CreditCard },
  { label: "Order Review", icon: PackageCheck },
  { label: "Success Page", icon: PackageCheck },
];

export default function CheckoutPage() {
  return (
    <div className="container-page py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Multi-step checkout</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="grid gap-3 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="rounded-lg border bg-card p-3">
                  <Icon className="mb-3 size-5 text-primary" />
                  <p className="text-xs text-muted-foreground">Step {index + 1}</p>
                  <p className="text-sm font-medium">{step.label}</p>
                </div>
              );
            })}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Shipping address</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {["Full name", "Phone", "Address line", "City"].map((label) => (
                <div key={label} className="grid gap-2">
                  <Label>{label}</Label>
                  <Input placeholder={label} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Delivery method</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue="express">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose delivery" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard delivery</SelectItem>
                  <SelectItem value="express">Express delivery</SelectItem>
                  <SelectItem value="same-day">Same day delivery</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Payment method</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {["Credit Card", "Stripe", "SSLCommerz", "bKash", "Nagad", "Rocket", "Cash On Delivery"].map((method) => (
                <Button key={method} variant="outline" className="justify-start">
                  {method}
                </Button>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Step 4: Order review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Items</span>
                <span>$696</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$18</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$714</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Ready to place order</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This UI is frontend-only and ready for backend payment and order
              APIs.
            </p>
            <Button asChild className="w-full">
              <Link href="/checkout/success">Place order</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
