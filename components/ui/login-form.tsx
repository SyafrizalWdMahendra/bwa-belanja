import { cn } from "@/lib/utils";
import { FieldDescription } from "@/components/ui/field";
import FormSignIn from "@/app/(admin)/dashboard/(auth)/sign-in/_components/form";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FormSignIn />
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
