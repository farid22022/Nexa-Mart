import { Bell, Mail, Megaphone, PackageCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { notifications } from "@/lib/data";

const icons = [Megaphone, PackageCheck, Mail, Bell];

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <p className="text-sm text-muted-foreground">
          Promotions, order updates, and messages.
        </p>
      </div>
      {notifications.map((notification, index) => {
        const Icon = icons[index % icons.length];
        return (
          <Card key={notification}>
            <CardContent className="flex items-start gap-4 p-5">
              <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-medium">{notification}</p>
                <p className="text-sm text-muted-foreground">Just now</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
