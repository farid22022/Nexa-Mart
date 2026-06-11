import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="container-page grid min-h-[760px] place-items-center py-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Create account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-3">
              <Label>Name</Label>
              <Input placeholder="Your name" />
            </div>
            <div className="grid gap-3">
              <Label>Phone</Label>
              <Input placeholder="+880 17..." />
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-3">
              <Label>Password</Label>
              <Input type="password" />
            </div>
            <div className="grid gap-3">
              <Label>Confirm password</Label>
              <Input type="password" />
            </div>
          </div>
          <Label className="flex items-center gap-2 text-sm">
            <Checkbox />
            I agree to the terms and conditions
          </Label>
          <Button>Create account</Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
