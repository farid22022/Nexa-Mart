import Link from "next/link";
import { AlertCircle, CheckCircle2, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PaymentStatusProps = {
  type: "success" | "failed" | "pending";
};

const statusCopy = {
  success: {
    title: "Payment successful",
    text: "The transaction has been authorized and the order is ready for fulfillment.",
    icon: CheckCircle2,
  },
  failed: {
    title: "Payment failed",
    text: "The payment could not be completed. Try another method or review the card details.",
    icon: AlertCircle,
  },
  pending: {
    title: "Payment pending",
    text: "The payment request is waiting for confirmation from the provider.",
    icon: Clock3,
  },
};

export function PaymentStatus({ type }: PaymentStatusProps) {
  const status = statusCopy[type];
  const Icon = status.icon;

  return (
    <div className="container-page grid min-h-[640px] place-items-center py-10">
      <Card className="max-w-xl text-center">
        <CardContent className="p-8">
          <Icon className="mx-auto size-14 text-primary" />
          <h1 className="mt-5 text-3xl font-semibold">{status.title}</h1>
          <p className="mt-3 text-muted-foreground">{status.text}</p>
          <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
            <Button asChild>
              <Link href="/payments">Back to payments</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard/customer/orders">Order details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
