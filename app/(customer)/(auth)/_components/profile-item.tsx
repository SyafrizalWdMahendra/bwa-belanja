import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

export default function ProfileItem() {
  return (
    <DropdownMenuItem className="flex items-center gap-2 hover:cursor-pointer">
      <User className="focus:text-white" />
      <span>Profile</span>
    </DropdownMenuItem>
  );
}
