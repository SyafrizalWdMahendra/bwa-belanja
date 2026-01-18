import React from "react";
import { AuthSession } from "../../(auth)/_components/auth-session";
import Link from "next/link";

export default function NavHeader() {
  return (
    <nav className="container max-w-282.5 mx-auto flex items-center justify-between bg-[#0D5CD7] p-5 rounded-3xl">
      <div className="flex shrink-0">
        <img src="/assets/logos/logo.svg" alt="icon" />
      </div>
      <ul className="flex items-center gap-7.5">
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-[#FFC736]">
          <Link href="/catalogs">Shop</Link>
        </li>
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
          <a href="">Categories</a>
        </li>
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
          <a href="">Testimonials</a>
        </li>
        <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
          <a href="">Rewards</a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <a href="cart.html">
          <div className="w-12 h-12 flex shrink-0">
            <img src="/assets/icons/cart.svg" alt="icon" />
          </div>
        </a>
        <AuthSession />
      </div>
    </nav>
  );
}
