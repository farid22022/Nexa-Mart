export function DashboardPreview({
  title,
}: {
  title: string;
}) {
  return (
    <div className="h-[550px] border rounded-xl flex items-center justify-center">
      {title}
    </div>
  );
}