import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <div className="container-page grid min-h-[680px] place-items-center py-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Reset password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {[
            ["Email verification", "email", "you@example.com"],
            ["OTP verification", "text", "6 digit code"],
            ["New password", "password", "New password"],
          ].map(([label, type, placeholder], index) => (
            <div key={label} className="grid gap-3">
              <Label>
                Step {index + 1}: {label}
              </Label>
              <Input type={type} placeholder={placeholder} />
            </div>
          ))}
          <Button className="w-full">Update password</Button>
        </CardContent>
      </Card>
    </div>
  );
}
