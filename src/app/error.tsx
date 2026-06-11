"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-page grid min-h-[620px] place-items-center py-10">
      <Card className="max-w-xl text-center">
        <CardContent className="p-8">
          <AlertTriangle className="mx-auto size-14 text-destructive" />
          <h1 className="mt-5 text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-muted-foreground">
            {error.message || "The page could not be rendered."}
          </p>
          <Button className="mt-6" onClick={reset}>
            <RefreshCcw />
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
