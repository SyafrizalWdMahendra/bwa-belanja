"use client";

import React, { useActionState, useState } from "react";
import { initialState } from "@/lib/types";
import { AlertCircle, Loader2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignIn } from "../lib/actions";

export default function SignInModal() {
  const [state, formAction, isPending] = useActionState(SignIn, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-3">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="p-[12px_20px] bg-white rounded-full font-semibold border hover:bg-gray-50 transition-colors border-none hover:cursor-pointer">
            Sign In
          </button>
        </DialogTrigger>

        {/* Konten Modal */}
        <DialogContent className="sm:max-w-125 p-0 bg-white rounded-3xl overflow-hidden border-[#E5E5E5]">
          <DialogHeader className="sr-only">
            <DialogTitle>Sign In</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-5 p-[40px_30px]">
            {/* Logo */}
            <div className="flex justify-center mb-2">
              {/* Ganti src sesuai lokasi logo Anda */}
              <img
                src="/assets/logos/logo-black.svg"
                alt="logo"
                className="h-10"
              />
            </div>

            <h1 className="font-bold text-2xl leading-[34px] text-center">
              Sign In
            </h1>

            {/* Form */}
            <form action={formAction} className="flex flex-col gap-5">
              {/* Error Alert */}
              {state.error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md flex items-center gap-2 border border-red-200">
                  <AlertCircle className="h-4 w-4" />
                  <span>{state.error}</span>
                </div>
              )}

              {/* Email Input */}
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
                  id="email"
                  name="email"
                  required
                  className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-transparent"
                  placeholder="Write your email address"
                />
              </div>

              {/* Password Input */}
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
                  id="password"
                  name="password"
                  required
                  className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-transparent"
                  placeholder="Write your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="reveal-password flex shrink-0 text-gray-500 hover:text-black transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white hover:bg-[#0D5CD7]/90 transition-colors disabled:opacity-70 flex items-center justify-center"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Sign In to My Account"
                  )}
                </button>

                <Link
                  href="/sign-up"
                  className="p-[12px_24px] text-black bg-white rounded-full text-center font-semibold border border-[#E5E5E5] hover:bg-gray-50 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
