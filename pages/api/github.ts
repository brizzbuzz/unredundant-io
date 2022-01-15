import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { RepositoryInfoFragment, RepositoryInfoFragmentDoc } from '../../generated/graphql';

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
  language: string | null;
  release: string | null;
  description: string;
  role: string;
};

type GetProjectsQuery = {
  kompendium: RepositoryInfoFragment;
  satisfaketion: RepositoryInfoFragment;
  sourdoughGradle: RepositoryInfoFragment;
};

export async function getProjectData() {
  const { data } = await githubClient.query<GetProjectsQuery>({
    query: gql`
      ${RepositoryInfoFragmentDoc}
      query GetProjects {
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
    infoFragmentToResponse(data.kompendium),
    infoFragmentToResponse(data.satisfaketion, 'A funky faker implementation aimed at leaving you fully satisfied'),
    infoFragmentToResponse(data.sourdoughGradle),
  ];
}

const infoFragmentToResponse = (
  fragment: RepositoryInfoFragment,
  description: string | null = null,
  role = 'Core Maintainer'
): RepositoryInfo => {
  return {
    description: description ?? fragment.description ?? '',
    language: fragment.primaryLanguage?.name ?? null,
    release: fragment.latestRelease?.name ?? null,
    role: role,
    stars: fragment.stargazerCount,
    repo: fragment.nameWithOwner,
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Array<RepositoryInfo>>) => {
  const jsonData = await getProjectData();
  res.status(200).json(jsonData);
};

export default handler;
