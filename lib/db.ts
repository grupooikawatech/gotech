import postgres from "postgres"

const sql = postgres({
  hostname: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
})

export type Course = {
  id: number,
  nome: string,
  descricao: string,
  imagem: string,
  categoria_id: number,
  link_compra: string,
}

export type Category = {
  id: number,
  nome: string,
}

export type Count = {
  count: number,
}

const ITEMS_PER_PAGE = 20;

export const fetchCoursesPages = async (query: string, categoria: number) => {
  let data

  if (Number(categoria) === 1)
    data = await sql<Count[]>`
      SELECT COUNT (*)
      FROM academy
      WHERE 
        nome ILIKE ${`%${query}%`} OR 
        descricao ILIKE ${`%${query}%`}`
  else
    data = await sql<Count[]>`
    SELECT COUNT (*)
    FROM academy
    WHERE
      (nome ILIKE ${`%${query}%`} OR 
      descricao ILIKE ${`%${query}%`}) AND
      categoria_id = ${categoria}
`
  return Math.ceil(Number(data.at(0)!.count) / ITEMS_PER_PAGE);
}

export const fetchCourses =
  async ({ categoria = 1, query = "", page = 1, id = -1 }) => {
    const offset = (page - 1) * ITEMS_PER_PAGE;

    if (id > -1)
      return await sql<Course[]>`
      SELECT * 
      FROM academy
      WHERE id = ${id}`

    if (Number(categoria) === 1) {
      return await sql<Course[]>`
      SELECT * 
      FROM academy
      WHERE 
        nome ILIKE ${`%${query}%`} OR 
        descricao ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
    }

    return await sql<Course[]>`
      SELECT *
      FROM academy
      WHERE
        (nome ILIKE ${`%${query}%`} OR 
        descricao ILIKE ${`%${query}%`} ) AND
        categoria_id = ${categoria}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
  }

export const fetchCategorias =
  async () => await sql<Category[]>`
SELECT * FROM categorias`
