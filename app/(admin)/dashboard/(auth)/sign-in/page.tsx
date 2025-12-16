import { LoginForm } from "@/components/ui/login-form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const { session, user } = await getUser();
  console.log("DEBUG LOGIN:", { sessionExists: !!session, role: user?.role });
  if (session && user?.role === "superadmin") {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
