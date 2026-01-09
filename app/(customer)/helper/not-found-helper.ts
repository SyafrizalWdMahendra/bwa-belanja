"use client";

import { usePathname } from "next/navigation";

export const useNotFoundHelper = () => {
  const pathname = usePathname();

  return {
    title: "Halaman Tidak Ditemukan",
    description: `Maaf, kami tidak dapat menemukan halaman "${pathname}". Silahkan periksa kembali tautan Anda.`,
  };
};
