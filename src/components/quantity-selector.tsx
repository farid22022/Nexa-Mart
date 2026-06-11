"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        aria-label="Decrease quantity"
        onClick={() => setQuantity((value) => Math.max(1, value - 1))}
      >
        <Minus />
      </Button>
      <span className="grid h-9 min-w-12 place-items-center rounded-lg border px-3 text-sm font-medium">
        {quantity}
      </span>
      <Button
        variant="outline"
        size="icon"
        aria-label="Increase quantity"
        onClick={() => setQuantity((value) => value + 1)}
      >
        <Plus />
      </Button>
    </div>
  );
}
