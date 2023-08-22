import sql from "@/lib/db"

export async function GET() {
  try {
    const planes = await sql`SELECT * FROM PLANES;`
    return new Response(JSON.stringify(planes))
  } catch(err) {
    return new Response('Could not fetch planes', { status: 500 })
  } 
}