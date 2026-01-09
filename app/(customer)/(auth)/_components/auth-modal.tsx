"use client";

import React, { useActionState, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation"; // Import hooks navigasi
import { initialState } from "@/lib/types";
import { AlertCircle, Loader2, Eye, EyeOff, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignIn, SignUp } from "../lib/actions";

interface AuthModalProps {
  isSignUpPage?: boolean;
  triggerText?: string;
  triggerClass?: string;
}

export default function AuthModal({
  isSignUpPage = false,
  triggerText = "Sign In",
  triggerClass = "p-[12px_20px] bg-white rounded-full font-semibold border hover:bg-gray-50 transition-colors hover:cursor-pointer border-none",
}: AuthModalProps) {
  // Hooks Navigasi
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isSignUpMode, setIsSignUpMode] = useState(isSignUpPage);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [signInState, signInAction, isSignInPending] = useActionState(
    SignIn,
    initialState
  );
  const [signUpState, signUpAction, isSignUpPending] = useActionState(
    SignUp,
    initialState
  );

  useEffect(() => {
    if (searchParams.get("login") === "true") {
      if (!isSignUpPage) {
        setIsOpen(true);
        setIsSignUpMode(false);

        router.replace(pathname, { scroll: false });
      }
    }
  }, [searchParams, pathname, router, isSignUpPage]);

  useEffect(() => {
    if (isOpen) {
      if (searchParams.get("login") !== "true") {
        setIsSignUpMode(isSignUpPage);
      }
    }
  }, [isOpen, isSignUpPage, searchParams]);

  const currentState = isSignUpMode ? signUpState : signInState;
  const isPending = isSignUpMode ? isSignUpPending : isSignInPending;
  const formAction = isSignUpMode ? signUpAction : signInAction;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={triggerClass}>{triggerText}</button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] p-0 bg-white rounded-3xl overflow-hidden border-[#E5E5E5]">
        <DialogHeader className="sr-only">
          <DialogTitle>{isSignUpMode ? "Sign Up" : "Sign In"}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5 p-[40px_30px]">
          {/* ... (Konten Form Tetap Sama, tidak ada perubahan di sini) ... */}
          <div className="flex justify-center mb-2">
            <img
              src="/assets/logos/logo-black.svg"
              alt="logo"
              className="h-10"
            />
          </div>

          <h1 className="font-bold text-2xl leading-[34px] text-center">
            {isSignUpMode ? "Create Account" : "Sign In"}
          </h1>

          {/* Form Logic */}
          <form action={formAction} className="flex flex-col gap-5">
            {/* Error State */}
            {currentState?.error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md flex items-center gap-2 border border-red-200">
                <AlertCircle className="h-4 w-4" />
                <span>{currentState.error}</span>
              </div>
            )}

            {/* Input Name */}
            {isSignUpMode && (
              <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
                <div className="flex shrink-0">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  className="appearance-none outline-none w-full font-semibold text-black bg-transparent placeholder:font-normal"
                  placeholder="Write your full name"
                />
              </div>
            )}

            {/* Input Email */}
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img
                  src="/assets/icons/sms.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
              <input
                type="email"
                name="email"
                required
                className="appearance-none outline-none w-full font-semibold text-black bg-transparent placeholder:font-normal"
                placeholder="Write your email address"
              />
            </div>

            {/* Input Password */}
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img
                  src="/assets/icons/lock.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="appearance-none outline-none w-full font-semibold text-black bg-transparent placeholder:font-normal"
                placeholder="Write your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex shrink-0 text-gray-500 hover:text-black transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                type="submit"
                disabled={isPending}
                className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white hover:bg-[#0D5CD7]/90 transition-colors disabled:opacity-70 flex items-center justify-center"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : isSignUpMode ? (
                  "Create My Account"
                ) : (
                  "Sign In to My Account"
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsSignUpMode(!isSignUpMode)}
                className="p-[12px_24px] text-black bg-white rounded-full text-center font-semibold border border-[#E5E5E5] hover:bg-gray-50 transition-colors"
              >
                {isSignUpMode ? "Already have an account? Sign In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
