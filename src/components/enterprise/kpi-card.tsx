interface Props {
  title: string;
  value: string;
}

export function KpiCard({
  title,
  value,
}: Props) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="text-3xl font-bold text-red-600">
        {value}
      </div>

      <div className="mt-2 text-muted-foreground">
        {title}
      </div>
    </div>
  );
}