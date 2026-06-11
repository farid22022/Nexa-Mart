import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductQuickView } from "@/components/product-quick-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 90vw"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge>{product.badge}</Badge>
          <Badge variant="secondary">{discount}% off</Badge>
        </div>
        <Button
          variant="secondary"
          size="icon"
          aria-label={`Save ${product.name}`}
          className="absolute right-3 top-3 bg-background/90"
        >
          <Heart />
        </Button>
      </div>
      <CardContent className="space-y-4 p-4">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{product.brand}</span>
            <span>{product.stock}</span>
          </div>
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="line-clamp-2 min-h-11 text-base font-semibold">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold">
              {formatCurrency(product.price)}
            </p>
            <p className="text-sm text-muted-foreground line-through">
              {formatCurrency(product.originalPrice)}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {product.rating}
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <ProductQuickView product={product} />
          <AddToCartButton name={product.name} compact />
        </div>
      </CardContent>
    </Card>
  );
}
