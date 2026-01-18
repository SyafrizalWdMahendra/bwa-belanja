"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white hover:cursor-pointer"
    >
      {pending ? "Please Wait..." : "Checkout Now"}
    </button>
  );
}
