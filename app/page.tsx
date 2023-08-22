import { columns } from "@/components/data-table/data-table-columns"
import { DataTable } from "@/components/data-table/data-table"
import { Header } from "@/components/layouts/site-header"
import { getPlanes } from "@/lib/api"

export default async function Home() {
  const data = await getPlanes()

  return (
    <>
      <Header />
      <main>
        { data ? <DataTable data={data} columns={columns}/> : null }
      </main>
    </>
  )
}
