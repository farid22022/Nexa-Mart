import Link from "next/link";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { NavItem } from "@/lib/data";

type DashboardShellProps = {
  title: string;
  subtitle: string;
  nav: NavItem[];
  children: ReactNode;
};

export function DashboardShell({
  title,
  subtitle,
  nav,
  children,
}: DashboardShellProps) {
  const navigation = (
    <nav className="grid gap-1">
      {nav.map((item) => {
        const Icon = item.icon;

        return (
          <Button
            key={item.href}
            asChild
            variant="ghost"
            className="justify-start"
          >
            <Link href={item.href}>
              <Icon className="mr-2 size-4" />
              {item.title}
            </Link>
          </Button>
        );
      })}
    </nav>
  );

  return (
    <div className="container-page py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>{title}</SheetTitle>
            <div className="mt-6">{navigation}</div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="hidden rounded-lg border bg-card p-3 lg:block">
          {navigation}
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}
