import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'
import { users } from './db/schema'
import { migrate } from 'drizzle-orm/node-postgres/migrator'

// Create a connection pool
const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'test_user',
  password: 'tesT_password',
  database: 'portfolio',
})

// Create a drizzle instance
const db = drizzle(pool)

console.log('Database initialized')

// Run migrations
await migrate(db, {
  migrationsFolder: './drizzle',
})

console.log('Migrations complete')

export const allUsers = await db.select().from(users)

console.log('All users', allUsers)
