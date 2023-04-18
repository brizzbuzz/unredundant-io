import { add } from 'persistence'
export default function Web() {
  return (
    <div>
      <h1>Admin {add(1, 2)}</h1>
    </div>
  )
}
