import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function CoursePage({ params }:
  { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // const res = await fetchCourses({ id: Number(id) })
  const prisma = new PrismaClient()
  const course = await prisma.academy.findUnique({
    where: {
      id: Number(id)
    }
  })

  return (
    <div className='max-w-4xl m-auto'>

      <h1 className="text-2xl font-bold text-center">
        {course.nome}
      </h1>
      <img
        className="m-auto"
        src={course.imagem.slice(5, course.imagem.length)}
        alt={"Imagem do curso"}
      />
      <p className="text-lg text-justify">
        {course.descricao}
      </p>
      <Link
        href={course.link_compra}
        className='text-center text-blue-600'
      >Inscreva-se</Link>
    </div>
  )
} 