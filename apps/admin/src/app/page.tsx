import { getDatabase } from '@/utils'
import { users } from 'persistence/src/db/schema'

export default async function Page() {
  const database = await getDatabase()
  const data = await database.select().from(users)
  return (
    <div>
      <h1>Hello</h1>
      <pre>
        {data[0].firstName} {data[0].lastName}
      </pre>
    </div>
  )
}
