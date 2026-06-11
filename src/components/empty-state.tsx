import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="grid min-h-64 place-items-center p-8 text-center">
        <div>
          <span className="mx-auto grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-6" />
          </span>
          <h2 className="mt-4 text-xl font-semibold">{title}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            {description}
          </p>
          {action && (
            <Button className="mt-5" variant="outline">
              {action}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
