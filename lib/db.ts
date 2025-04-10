import postgres from "postgres"

const sql = postgres({
  hostname: "postgres",
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
})

export type Course = {
  id: number,
  nome: string,
  descricao: string,
  imagem: string,
  categoria_id: number,
}

export type Category = {
  id: number,
  nome: string,
}

export const fetchCourses =
  async (categoria = 1, query = "") => {
    if (Number(categoria) === 1)
      return await sql<Course[]>`
        SELECT * FROM academy`

    return await sql<Course[]>`
      SELECT * 
      FROM academy
      WHERE 
        nome ILIKE ${`%${query}%`} AND 
        categoria_id = ${categoria}`
  }

export const fetchCategorias =
  async () => await sql<Category[]>`
    SELECT * FROM categorias`
