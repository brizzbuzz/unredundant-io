terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "unredundant"

    workspaces {
      name = "unredundant-io"
    }
  }
}