interface WarehouseStatProps {
  title: string;
  value: string;
}

export function WarehouseStat({ title, value }: WarehouseStatProps) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-muted-foreground mt-2">{title}</div>
    </div>
  );
}