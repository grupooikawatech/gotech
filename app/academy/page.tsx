import { fetchCategorias, fetchCoursesPages } from '@/lib/db'
import Search from './components/search';
import CoursesGrid from './components/grid'
import CategoriesFilter from './components/categories'
import Pagination from './components/pagination';
import AcademyHeader from './components/header';

export default async function Academy(props: {
  searchParams?: Promise<{
    categoria?: number;
    query?: string;
    page?: number;
  }>;
}) {
  const { categoria = 1, query = "", page = 1 } = await props.searchParams || {}
  return (
    <div className='p-4'>
      <AcademyHeader />
      <div className="max-w-4xl m-auto">
        <Search />
        <CategoriesFilter categories={await fetchCategorias()} />
      </div>
      <CoursesGrid
        categoria={categoria || 1}
        query={query || ""}
        page={page || 1} />
      <Pagination totalPages={await fetchCoursesPages(query, categoria)} />
    </div>
  )
}