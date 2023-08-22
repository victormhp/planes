import postgres from "postgres";

const env = process.env.NODE_ENV === 'production' ? process.env.SUPABASE_URL ?? '' : process.env.DATABASE_URL ?? ''
const connectionString = env 
const sql = postgres(connectionString)

export default sql
