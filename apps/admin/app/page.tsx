import { getAllUsers } from 'persistence'

export default async function Page() {
  const data = await getAllUsers()
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
