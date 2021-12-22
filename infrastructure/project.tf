data "digitalocean_project" "personal" {
  name = "Personal"
}

resource "digitalocean_project_resources" "unredundant" {
  project = data.digitalocean_project.personal.id
  resources = [
    digitalocean_app.unredundant.id
  ]
}