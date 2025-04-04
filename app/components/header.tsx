import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-4 max-w-screen">
      <Image src="/logo.jpg" height={100} width={100} alt="" />
      <h1 className="text-3xl font-bold">Fenix Reborn</h1>
      <div className="flex gap-4">
        <Link href={"/"}>Início</Link>
        <Link href={"/store"}>Store</Link>
        <Link href={"/academy"}>Academy</Link>
      </div>
    </header>
  )
}