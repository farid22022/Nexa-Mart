import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cartItems, formatCurrency } from "@/lib/data";

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const shipping = 18;

  return (
    <div className="container-page py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Shopping cart</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cartItems.map(({ product, quantity }) => (
            <Card key={product.id}>
              <CardContent className="grid gap-4 p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="120px" />
                </div>
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  <p className="mt-2 font-semibold">{formatCurrency(product.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" aria-label="Decrease">
                    <Minus />
                  </Button>
                  <span className="grid h-8 min-w-10 place-items-center rounded-lg border text-sm">
                    {quantity}
                  </span>
                  <Button variant="outline" size="icon" aria-label="Increase">
                    <Plus />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Remove">
                    <Trash2 />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Cart summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Coupon code" />
              <Button variant="outline">Apply</Button>
            </div>
            <Separator />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatCurrency(subtotal + shipping)}</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/checkout">Checkout</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
