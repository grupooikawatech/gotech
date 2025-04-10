import { fetchCourses } from "@/lib/db";
import Image from "next/image";

export default async function CoursesGrid(
  { categoria: categoria }: { categoria: number }) {
  const res = await fetchCourses(categoria)
  return (
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4'>
      {res.map((course) =>
        <button
          key={course.id}
          className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
        >
          <h3>{course.nome}</h3>
          <Image
            className='aspect-square object-cover'
            src={course.imagem.slice(5, course.imagem.length)}
            width={300}
            height={300}
            alt=''
          />
        </button>
      )}
    </div>
  )
}