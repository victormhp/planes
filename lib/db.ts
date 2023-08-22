import postgres from "postgres";

const databaseEnv = process.env.NODE_ENV === 'production' ? process.env.SUPABASE_URL : process.env.DATABASE_URL
const connectionString = databaseEnv ?? ''
const sql = postgres(connectionString)

export default sql
