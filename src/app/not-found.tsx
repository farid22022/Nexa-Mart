import Link from "next/link";
import { SearchX } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page grid min-h-[620px] place-items-center py-10">
      <div className="w-full max-w-2xl">
        <EmptyState
          icon={SearchX}
          title="Page not found"
          description="The page you requested is not available in this frontend demo."
        />
        <div className="mt-4 flex justify-center">
          <Button asChild>
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
