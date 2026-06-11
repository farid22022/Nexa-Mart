import { ManagementPage } from "@/components/management-page";

export default function AdminContentPage() {
  return (
    <ManagementPage
      title="Content management"
      description="Blogs, pages, FAQ, and SEO settings."
      primaryAction="Create page"
      stats={["42 blog posts", "18 CMS pages", "96 SEO checks passed"]}
      rows={[
        { name: "Buying guides", detail: "Blog collection", status: "Published", value: "24 posts" },
        { name: "FAQ", detail: "Support content", status: "Needs update", value: "18 entries" },
        { name: "SEO settings", detail: "Metadata", status: "Healthy", value: "96/100" },
        { name: "Landing pages", detail: "CMS pages", status: "Active", value: "18" },
      ]}
    />
  );
}
