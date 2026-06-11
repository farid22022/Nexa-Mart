import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition-all">
      <Icon className="w-10 h-10 text-red-600 mb-4" />

      <h3 className="font-semibold text-xl mb-3">
        {title}
      </h3>

      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}