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

type RepositoryNameInfo = {
  owner: string;
  name: string;
};

export type RepositoryInfo = {
  repo: RepositoryNameInfo;
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
  sourdoughKotlin: RepositoryInfoFragment;
  skelegro: RepositoryInfoFragment;
  unredundantio: RepositoryInfoFragment;
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
        sourdoughKotlin: repository(owner: "bkbnio", name: "sourdough-kt") {
          ...RepositoryInfo
        }
        skelegro: repository(owner: "bkbnio", name: "skelegro") {
          ...RepositoryInfo
        }
        unredundantio: repository(owner: "unredundant", name: "unredundant-io") {
          ...RepositoryInfo
        }
      }
    `,
  });

  return [
    infoFragmentToResponse(data.kompendium, 'Ktor OpenAPI Generator'),
    infoFragmentToResponse(data.satisfaketion, 'A Funky Faker'),
    infoFragmentToResponse(data.sourdoughGradle, 'Great Gradle Plugins'),
    infoFragmentToResponse(data.sourdoughKotlin, 'Repo Template for Kotlin JVM'),
    infoFragmentToResponse(data.skelegro, 'Wacky Assortment of Kotlin DSLs'),
    infoFragmentToResponse(data.unredundantio, 'This Portfolio Site'),
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
    repo: {
      name: fragment.name,
      owner: fragment.owner.login,
    },
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Array<RepositoryInfo>>) => {
  const jsonData = await getProjectData();
  res.status(200).json(jsonData);
};

export default handler;
