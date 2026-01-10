import { getUser } from "@/lib/auth";
import AuthModal from "./auth-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import ProfileItem from "../../(index)/_components/profile-item";
import { LogoutForm } from "./logout-form";

export const AuthSession = async () => {
  const { session } = await getUser();

  if (!session) {
    return (
      <div className="flex gap-3">
        <AuthModal isSignUpPage={false} triggerText="Sign In" />

        <AuthModal isSignUpPage={true} triggerText="Sign Up" />
      </div>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="p-3 bg-white rounded-full font-semibold hover:cursor-pointer">
          <User />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white text-black rounded-2xl border-none">
          <ProfileItem />
          <DropdownMenuSeparator />
          <LogoutForm />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};
