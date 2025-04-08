import postgres from "postgres"

const sql = postgres({
  hostname: "postgres",
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
})

export const getAcademyCourses = async () => await sql`SELECT * FROM academy`

