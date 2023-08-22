import { Plane } from "@/types"

const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL ?? '' : 'http://localhost:3000/api' 

export async function getPlanes(): Promise<Plane[] | null> {
  try {
    const res = await fetch(`${baseUrl}/planes`)

    if (!res.ok) {
      return null
    }

    const data = await res.json()
    return data.rows
  } catch(err) {
    console.error(err)
    return null
  }
}