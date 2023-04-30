import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'
import { users } from './db/schema'

// Create a connection pool
const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'test_user',
  password: 'test_password',
  database: 'portfolio',
})

// Create a drizzle instance
const db = drizzle(pool)

export async function getAllUsers() {
  return db.select().from(users)
}
