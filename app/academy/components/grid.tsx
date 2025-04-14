import { fetchCourses } from "@/lib/db";
import GridItem from "./gridItem";

export default async function CoursesGrid({
  categoria: categoria,
  query: query,
  page: page
}: {
  categoria: number,
  query: string,
  page: number;
}) {
  const res = await fetchCourses({ categoria, query, page })
  return (
    <div className='max-w-5xl m-auto grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4'>
      {res.map((course) =>
        <GridItem key={course.id} course={course} />
      )}
    </div>
  )
}