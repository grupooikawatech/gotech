import Image from 'next/image'
import { getAcademyCourses } from '../lib/db'


export default async function Academy() {
  const res = await getAcademyCourses()
  return (
    <div>
      <h2> Academy </h2>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4'>
        {res.map((row) =>
          <button
            key={row.id}
            className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
          >
            <h3>{row.nome}</h3>
            <Image
              className='aspect-square object-cover'
              src={row.imagem.slice(5, row.imagem.length)}
              width={300}
              height={300}
              alt=''
            />
          </button>
        )}
      </div>
    </div>
  )
}