import { Course } from "@/lib/db";
import Image from "next/image";

export default function GridItem({ course }: { course: Course }) {
  return <button
    key={course.id}
    className='rounded-xl bg-white hover:bg-blue-300 p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue'
  >
    <Image
      className='aspect-square object-cover'
      src={course.imagem.slice(5, course.imagem.length)}
      width={300}
      height={300}
      alt=''
    />
    <h3>{course.nome}</h3>
  </button>
}