import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

const githubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export type RepositoryInfo = {
  repo: string;
  stars: number;
  language: string;
  release: string | null;
};

const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    nameWithOwner
    stargazerCount
    latestRelease {
      name
      createdAt
    }
    primaryLanguage {
      name
    }
  }
`;

export async function getProjectData() {
  const { data } = await githubClient.query({
    query: gql`
      ${REPOSITORY_INFO}
      query GetRepositories {
        kompendium: repository(owner: "bkbnio", name: "kompendium") {
          ...RepositoryInfo
        }
        satisfaketion: repository(owner: "unredundant", name: "satisfaketion") {
          ...RepositoryInfo
        }
        sourdoughGradle: repository(owner: "bkbnio", name: "sourdough-gradle") {
          ...RepositoryInfo
        }
      }
    `,
  });
  return [
    {
      language: data.kompendium.primaryLanguage.name,
      stars: data.kompendium.stargazerCount,
      repo: data.kompendium.nameWithOwner,
      release: data.kompendium.latestRelease.name,
    },
    {
      language: data.satisfaketion.primaryLanguage.name,
      stars: data.satisfaketion.stargazerCount,
      repo: data.satisfaketion.nameWithOwner,
      release: data.satisfaketion.latestRelease?.name ?? null,
    },
    {
      language: data.sourdoughGradle.primaryLanguage.name,
      stars: data.sourdoughGradle.stargazerCount,
      repo: data.sourdoughGradle.nameWithOwner,
      release: data.sourdoughGradle.latestRelease?.name ?? null,
    },
  ];
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Array<RepositoryInfo>>) => {
  const jsonData = await getProjectData();
  res.status(200).json(jsonData);
};

export default handler;
