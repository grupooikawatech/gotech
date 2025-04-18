import Image from 'next/image'
import Link from 'next/link'

export default function Portifolio() {
  return (
    <div
      className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
    >
      <h2 className="text-3xl text-center mb-4 font-medium text-black dark:text-white"
      >{"Portifólio"}</h2>
      <div className='flex justify-center gap-4 items-center'>
        <Link
          href={"/portifolio/venda-certa"}
          className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
        >
          <h3 className="text-xl text-center mb-2">{"Venda Certa"}</h3>
          <Image
            className='aspect-square object-cover'
            src="/venda-certa.png"
            width={150}
            height={150}
            alt=''
          />
        </Link>

        <Link
          href={"/portifolio/clinica-oikawa"}
          className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
        >
          <h3 className="text-xl text-center mb-2">{"Clínica Oikawa"}</h3>
          <Image
            className='aspect-square object-cover'
            src="/clinica_oikawa.webp"
            width={150}
            height={150}
            alt=''
          />
        </Link>

        <Link
          href={"/portifolio/patch-news"}
          className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
        >
          <h3 className="text-xl text-center mb-2">{"Patch News"}</h3>
          <Image
            className='aspect-square object-cover'
            src="/logo-patch-news.png"
            width={150}
            height={150}
            alt=''
          />
        </Link>
      </div>
    </div >
  )
}