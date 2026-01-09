"use client";

import Link from "next/link";
import { useNotFoundHelper } from "./(customer)/helper/not-found-helper";

export default function NotFound() {
  const helper = useNotFoundHelper();

  return (
    <div className="flex flex-col items-center justify-center h-dvh text-center px-6 bg-slate-50 text-slate-900">
      <h1 className="text-6xl font-extrabold mb-4 animate-pulse text-[#0D5CD7]">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{helper.title}</h2>
      <p className="mb-8 max-w-md text-slate-600 leading-relaxed">
        {helper.description}
      </p>

      <Link
        href="/"
        className="flex items-center gap-2 p-3 px-6 rounded-full bg-[#0D5CD7] text-white font-semibold transition-all hover:bg-[#0D5CD7] hover:scale-105 shadow-lg shadow-blue-200"
      >
        <span>Kembali ke Beranda</span>
      </Link>
    </div>
  );
}
