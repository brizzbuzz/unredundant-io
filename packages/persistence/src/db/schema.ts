import { pgTable, uuid, text, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
})
