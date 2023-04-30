import { Pool } from 'pg'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'

// Singleton database instance
let db: NodePgDatabase

// Exposed connection function
export async function getOrConnectDatabaseSingleton(config: {
  host: string
  port: number
  user: string
  password: string
  database: string
  ssl_mode: string
}) {
  if (!db) {
    const pool = new Pool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      ssl:
        config.ssl_mode === 'require' ? { rejectUnauthorized: false } : false,
    })
    db = await drizzle(pool)
  }
  return db
}
