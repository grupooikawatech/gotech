'use client';

import { Category } from "@/lib/db";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function categoriesFilter(
  { categories: categories }:
    { categories: Category[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div className="flex items-center justify-center flex-wrap gap-4 m-4">
      {categories.map((cat) => (
        <button
          className="rounded-xl bg-white hover:bg-blue-300 p-3 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue"
          key={cat.id}
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.set("categoria", cat.id.toString());
            replace(`${pathname}?${params.toString()}`);
          }}
        >
          {cat.nome}
        </button>
      ))}
    </div>
  )
}