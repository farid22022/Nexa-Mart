import { MapPin, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addresses } from "@/lib/data";

export default function AddressesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Address management</h2>
          <p className="text-sm text-muted-foreground">
            Add, edit, and delete saved delivery addresses.
          </p>
        </div>
        <Button>
          <Plus />
          Add address
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {addresses.map((address) => (
          <Card key={address.name}>
            <CardContent className="flex items-start justify-between gap-4 p-5">
              <div className="flex gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="font-medium">{address.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{address.line}</p>
                  <p className="mt-2 text-xs text-primary">{address.tag}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={`Manage ${address.name}`}>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit address</DropdownMenuItem>
                  <DropdownMenuItem>Make default</DropdownMenuItem>
                  <DropdownMenuItem>Delete address</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
