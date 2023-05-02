import { getOrConnectDatabaseSingleton } from 'persistence'
import { env } from '@/env.mjs'

export const getDatabase = async () =>
  await getOrConnectDatabaseSingleton({
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    ssl_mode: env.DATABASE_SSL_MODE,
  })
