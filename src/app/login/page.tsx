import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="container-page grid min-h-[720px] place-items-center py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-3">
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-3">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Label className="flex items-center gap-2">
              <Checkbox />
              Remember me
            </Label>
            <Link href="/forgot-password" className="text-primary">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full">
            <Mail />
            Email login
          </Button>
          <Button variant="outline" className="w-full">
            <Phone />
            Phone login
          </Button>
          <Separator />
          <div className="grid gap-2">
            <Button variant="outline">
              <ShieldCheck />
              Continue with social SSO
            </Button>
            <Button variant="outline">Continue with Google</Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link href="/register" className="text-primary">
              Create account
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
