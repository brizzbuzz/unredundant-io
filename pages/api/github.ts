import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { StrictTypedTypePolicies } from './github-types.generated';

const typePolicies: StrictTypedTypePolicies = {};

const githubClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache({ typePolicies }),
});

type RepositoryInfo = {
  repo: string;
  stars: number;
  language: string;
  release: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<RepositoryInfo>) => {
  const { data } = await githubClient.query({
    query: gql`
      query Something {
        repository(owner: "bkbnio", name: "kompendium") {
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
      }
    `,
  });

  res.status(200).json({
    language: data.repository.primaryLanguage.name,
    stars: data.repository.stargazerCount,
    repo: data.repository.nameWithOwner,
    release: data.repository.latestRelease.name,
  });
};

export default handler;
