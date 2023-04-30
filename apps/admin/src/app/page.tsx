import { getDatabase } from '@/utils'
import { users } from 'persistence/src/db/schema'

export default async function Page() {
  const database = await getDatabase()
  const data = await database.select().from(users)
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
