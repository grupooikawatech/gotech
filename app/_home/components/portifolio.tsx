import Image from 'next/image'

export default function Portifolio() {
  return (
    <section
      className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
    >
      <h2
        className="text-xl font-medium text-black dark:text-white"
      > Portifólio </h2>
      <div className='flex justify-center gap-4 items-center'>
        <button
          className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
        >
          <h3>Venda Certa</h3>
          <Image
            className='aspect-square object-cover'
            src="/venda-certa.png"
            width={150}
            height={150}
            alt=''
          />
        </button>
        <button className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
        >
          <h3>Clínica Oikawa</h3>
          <Image
            className='aspect-square object-cover'
            src="/clinica_oikawa.webp"
            width={150}
            height={150}
            alt=''
          />
        </button>
        <button className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
        >
          <h3>Patch News</h3>
          <Image
            className='aspect-square object-cover'
            src="/logo-patch-news.png"
            width={150}
            height={150}
            alt=''
          />
        </button>
      </div>
    </section>
  )
}