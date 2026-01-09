"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { initialState } from "@/lib/types";
import { LogOut } from "lucide-react";
import { useActionState } from "react";
import { Logout } from "../lib/actions";

export const LogoutForm = () => {
  const [state, formAction] = useActionState(Logout, initialState);

  return (
    <form action={formAction}>
      <DropdownMenuItem>
        <button type="submit" className="flex items-center gap-2 hover:cursor-pointer">
          <LogOut className="focus:text-white" />
          <span>Logout</span>
        </button>
      </DropdownMenuItem>
    </form>
  );
};
