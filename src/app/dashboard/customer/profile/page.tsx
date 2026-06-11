import { Camera, Lock, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <Card>
        <CardContent className="p-6 text-center">
          <div className="mx-auto grid size-28 place-items-center rounded-full bg-primary/10 text-3xl font-semibold text-primary">
            MR
          </div>
          <h2 className="mt-4 text-xl font-semibold">Maya Rahman</h2>
          <p className="text-sm text-muted-foreground">Gold rewards member</p>
          <Button className="mt-5 w-full" variant="outline">
            <Camera />
            Change profile picture
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Personal information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Name", "Email", "Phone", "Birthday"].map((label) => (
              <div key={label} className="grid gap-2">
                <Label>{label}</Label>
                <Input placeholder={label} />
              </div>
            ))}
          </div>
          <Separator />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label>Current password</Label>
              <Input type="password" />
            </div>
            <div className="grid gap-2">
              <Label>New password</Label>
              <Input type="password" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">
              <Lock />
              Change password
            </Button>
            <Button>
              <Save />
              Save profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
