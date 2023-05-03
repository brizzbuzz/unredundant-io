schema "public" {}

table "users" {
  schema = schema.public

  column "id" {
    null = false
    type = uuid
  }

  column "first_name" {
    null = false
    type = text
  }

  column "last_name" {
    null = false
    type = text
  }

  column "email" {
    null = false
    type = varchar(256)
  }

  // TODO Hash and salt password
  column "password" {
    null = false
    type = varchar(256)
  }
}
