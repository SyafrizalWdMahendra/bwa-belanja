"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useActionState } from "react";
import { Logout } from "../lib/actions";
import { initialState } from "@/lib/types";

export default function FormLogout() {
  const [state, formAction] = useActionState(Logout, initialState);

  return (
    <form action={formAction}>
      <Button variant="link">
        <LogOut />
        <span>Logout</span>
      </Button>
    </form>
  );
}
