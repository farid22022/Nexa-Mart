interface WarehouseStatProps {
  title: string;
  value: string;
  subtitle?: string;
}

export function WarehouseStat({
  title,
  value,
  subtitle,
}: WarehouseStatProps) {
  return (
    <div className="border rounded-xl p-6 bg-background hover:shadow-lg transition-all duration-300">
      <div className="text-3xl font-bold text-red-600 mb-2">
        {value}
      </div>

      <div className="font-semibold">
        {title}
      </div>

      {subtitle && (
        <p className="text-sm text-muted-foreground mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}