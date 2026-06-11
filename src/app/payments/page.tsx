import Link from "next/link";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { paymentMethods } from "@/lib/data";

export default function PaymentsPage() {
  return (
    <div className="container-page py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Payment UI</h1>
      <p className="mt-2 text-muted-foreground">
        Credit card, PayPal, Stripe, SSLCommerz, bKash, Nagad, Rocket, and cash
        on delivery screens.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {paymentMethods.map((method) => (
            <Card key={method}>
              <CardContent className="p-5">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {method === "Cash On Delivery" ? (
                    <Wallet className="size-5" />
                  ) : method.includes("bKash") || method.includes("Nagad") || method.includes("Rocket") ? (
                    <Smartphone className="size-5" />
                  ) : (
                    <CreditCard className="size-5" />
                  )}
                </div>
                <p className="font-medium">{method}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Secure payment state and confirmation UI.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Credit card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>Card number</Label>
              <Input placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Expiry</Label>
                <Input placeholder="12/28" />
              </div>
              <div className="grid gap-2">
                <Label>CVC</Label>
                <Input placeholder="123" />
              </div>
            </div>
            <div className="grid gap-2">
              <Button asChild>
                <Link href="/payments/success">Pay now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/payments/pending">Simulate pending</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/payments/failed">Simulate failed</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
