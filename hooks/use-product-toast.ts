"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export function useCrudToast(entityName: string) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const toastShownRef = React.useRef(false);

  React.useEffect(() => {
    const isCreated = searchParams.get("created");
    const isUpdated = searchParams.get("updated");
    const isDeleted = searchParams.get("deleted");

    if (toastShownRef.current) return;

    let message = "";
    let paramToRemove = "";

    if (isCreated) {
      message = `${entityName} created successfully!`;
      paramToRemove = "created";
    } else if (isUpdated) {
      message = `${entityName} updated successfully!`;
      paramToRemove = "updated";
    } else if (isDeleted) {
      message = `${entityName} deleted successfully!`;
      paramToRemove = "deleted";
    }

    if (message) {
      toast.success(message);
      toastShownRef.current = true;

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete(paramToRemove);
      window.history.replaceState({}, "", newUrl.toString());
    }
  }, [searchParams, entityName]);
}
