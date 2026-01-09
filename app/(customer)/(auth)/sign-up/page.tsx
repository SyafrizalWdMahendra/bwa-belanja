"use client";
import { initialState } from "@/lib/types";
import Link from "next/link";
import React, { useActionState } from "react";
import { SignUp } from "../lib/actions";
import { AlertCircle, Loader2 } from "lucide-react";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(SignUp, initialState);
  return (
    <div
      id="signUp"
      className="bg-[#EFF3FA] min-h-screen pt-[30px] pb-[50px] flex flex-col"
    >
      <div className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center py-5">
        <form
          action={formAction}
          className="w-[500px] bg-white p-[50px_30px] flex flex-col gap-5 rounded-3xl border border-[#E5E5E5]"
        >
          {state.error && (
            <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{state.error}</span>
            </div>
          )}
          <div className="flex justify-center">
            <img src="assets/logos/logo-black.svg" alt="logo" />
          </div>
          <h1 className="font-bold text-2xl leading-[34px]">Sign Up</h1>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="assets/icons/profile-circle.svg" alt="icon" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
              placeholder="Write your complete name"
            />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="assets/icons/sms.svg" alt="icon" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
              placeholder="Write your email address"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="assets/icons/lock.svg" alt="icon" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
                placeholder="Write your password"
              />
              <button type="button" className="reveal-password flex shrink-0">
                <img src="assets/icons/eye.svg" alt="icon" />
              </button>
            </div>
            {/* <a
              href=""
              className="text-sm text-[#616369] underline w-fit mr-0 ml-auto"
            >
              Forgot Password
            </a> */}
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white"
            >
              {" "}
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Create New Account"
              )}
            </button>
            <Link
              href="sign-in"
              className="p-[12px_24px] text-black bg-white rounded-full text-center font-semibold border border-[#E5E5E5]"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
