import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutSuccessPage() {
  return (
    <div className="container-page grid min-h-[640px] place-items-center py-10">
      <Card className="max-w-xl text-center">
        <CardContent className="p-8">
          <CheckCircle2 className="mx-auto size-14 text-primary" />
          <h1 className="mt-5 text-3xl font-semibold">Order placed successfully</h1>
          <p className="mt-3 text-muted-foreground">
            Your order is confirmed and the live tracking page is ready.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
            <Button asChild>
              <Link href="/tracking">Track order</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard/customer/orders">View orders</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
