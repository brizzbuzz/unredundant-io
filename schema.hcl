schema "public" {}

table "users" {
  schema = schema.public

  column "id" {
    null = false
    type = uuid
    unique = true
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

  primary_key {
    columns = [column.id]
  }
}

table "cardio" {
  schema = schema.public

  column "id" {
    null = false
    type = uuid
  }

  column "user_id" {
    null = false
    type = uuid
  }

  column "date" {
    null = false
    type = date
  }

  column "distance_miles" {
    null = false
    type = numeric(10, 2)
  }

  column "time_seconds" {
    null = false
    type = numeric
    unsigned = true
  }

  column "notes" {
    null = true
    type = text
  }

  foreign_key "user_id" {
    columns = [column.user_id]
    ref_columns = [table.users.column.id]
    on_delete = "cascade"
    on_update = "cascade"
  }
}
