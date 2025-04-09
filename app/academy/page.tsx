import CoursesGrid from './components/grid'
import CategoriesFilter from './components/categories'
import { fetchCategorias, fetchCourses } from '../lib/db'

export default async function Academy(props: {
  searchParams?: Promise<{
    categoria?: number;
  }>;
}) {
  const searchParams = await props.searchParams;
  const categoria = searchParams?.categoria || 1;
  const cat = await fetchCategorias()
  return (
    <div className='p-4'>
      <h2> Academy </h2>
      <CategoriesFilter categories={cat} />
      <CoursesGrid categoria={categoria} />
    </div>
  )
}