'use client'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { ReactNode, ComponentRef, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: {
  children: ReactNode
}) {
  const router = useRouter();
  const dialogRef = useRef<ComponentRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open)
      dialogRef.current?.showModal();
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="flex flex-col items-end m-auto
       max-w-2xl rounded-xl bg-white p-4 shadow-lg 
       outline outline-black/5 dark:bg-slate-800 
       dark:shadow-none dark:-outline-offset-1
        dark:outline-white/10 text-black dark:text-white"
      onClose={() => router.back()}
    >
      <button
        onClick={() => router.back()}
        className="rounded-full p-2 cursor-pointer shadow-lg bg-red-400"
      >
        <XMarkIcon className="w-4" />
      </button>
      {children}
    </dialog>
    , document.getElementById('modal-root')!
  );
}