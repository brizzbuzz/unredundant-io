resource "digitalocean_app" "unredundant" {
  spec {
    name   = "unredundant"
    region = "nyc1"

    service {
      name               = "unredundant-io"
      environment_slug   = "node-js"
      instance_count     = 1
      instance_size_slug = "professional-xs"
      http_port          = 3000

      github {
        branch         = "main"
        deploy_on_push = true
        repo           = "unredundant/unredundant-io"
      }
    }
  }
}