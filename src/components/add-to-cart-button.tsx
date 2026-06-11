"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type AddToCartButtonProps = {
  name: string;
  compact?: boolean;
};

export function AddToCartButton({ name, compact }: AddToCartButtonProps) {
  return (
    <Button
      className={compact ? "w-full" : undefined}
      onClick={() => toast.success(`${name} added to cart`)}
    >
      <ShoppingCart />
      Add to cart
    </Button>
  );
}
