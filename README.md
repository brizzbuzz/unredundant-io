# Portfolio Site

Hey 👋 Welcome to the source code for my personal site https://unredundant.io

## Tech Stack

This project uses a number of frameworks / tooling to help create an awesome site and an awesome developer experience

1. [NextJS](https://nextjs.org/) for full-stack TypeScript development
2. [Vercel](https://vercel.com/) for hosting
3. [NextUI](https://nextui.org/) for UI bootstrapping
4. [Volta](https://volta.sh) for handling Node versioning
5. [Yarn](https://yarnpkg.com) for dependency management
6. [Apollo GraphQL](https://www.apollographql.com/) for the GraphQL client
7. [GraphQL CodeGen](https://www.graphql-code-generator.com) for schema introspection and type generation
8. [Remote MDX](https://github.com/hashicorp/next-mdx-remote) for processing blog posts

## Local Dev

### Pre-requisites

In order to run the dev server, you will need a couple of things first

1. Install [Volta](https://volta.sh)
2. Install [Yarn](https://yarnpkg.com)
3. Create a GitHub [Personal Access Token](https://github.com/settings/tokens/new)

### Configuring your environment

First things first, create an `.env.local` file in the root of your directory.

Inside, add the following with your PAT generated in the pre-reqs section.

```
GITHUB_TOKEN=
```

Once you have added this to your environment, you can go ahead and run

```shell
yarn codegen
```

This uses your GitHub token to access the GitHub GraphQL API, generating the type bindings necessary for the dynamic
project loading.

Once you have done that, you are ready to run the server

```shell
yarn dev
```

You should be all set 🚀 Head on over to http://localhost:3000 and starting playing around!