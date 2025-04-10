'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div className="flex items-center justify-center flex-wrap gap-4 m-4">
      <input
        defaultValue={searchParams.get('query')?.toString()}
        className="peer block w-full rounded-full py-[9px] pl-10 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
        onChange={useDebouncedCallback((e) => {
          const query = e.target.value;
          const params = new URLSearchParams(searchParams);
          if (query)
            params.set('query', query);
          else
            params.delete('query');
          replace(`${pathname}?${params.toString()}`);
        }, 300)}
      />
    </div>
  )
}