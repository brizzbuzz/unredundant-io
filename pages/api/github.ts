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
  thumbnailUrl: string;
};

type GetProjectsQuery = {
  kompendium: RepositoryInfoFragment;
  satisfaketion: RepositoryInfoFragment;
  sourdoughGradle: RepositoryInfoFragment;
  sourdoughKotlin: RepositoryInfoFragment;
  skelegro: RepositoryInfoFragment;
  unredundantio: RepositoryInfoFragment;
  backstage: RepositoryInfoFragment;
  lerasium: RepositoryInfoFragment;
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
        backstage: repository(owner: "backstage", name: "backstage") {
          ...RepositoryInfo
        }
        lerasium: repository(owner: "bkbnio", name: "lerasium") {
          ...RepositoryInfo
        }
      }
    `,
  });

  return [
    infoFragmentToResponse(data.kompendium, 'Ktor OpenAPI Generator', 'project/kompendium.jpeg'),
    infoFragmentToResponse(data.satisfaketion, 'A Funky Faker', 'project/satisfaketion.jpeg'),
    infoFragmentToResponse(data.sourdoughGradle, 'Great Gradle Plugins', 'project/sourdough-gradle.jpeg'),
    infoFragmentToResponse(data.sourdoughKotlin, 'Kotlin Repo Template', 'project/sourdough-kt.jpeg'),
    infoFragmentToResponse(data.skelegro, 'Wacky Kotlin DSLs', 'project/skelegro.jpeg'),
    infoFragmentToResponse(data.unredundantio, 'This Portfolio Site', 'project/unredundant-io.jpeg'),
    infoFragmentToResponse(data.backstage, 'Developer Portal Platform', 'project/backstage.jpeg'),
    infoFragmentToResponse(data.lerasium, 'Kotlin Service Generator', 'project/lerasium.jpeg'),
  ];
}

const infoFragmentToResponse = (
  fragment: RepositoryInfoFragment,
  description: string,
  thumbnailUrl: string,
  role = 'Core Maintainer'
): RepositoryInfo => {
  return {
    description: description ?? fragment.description ?? '',
    thumbnailUrl: thumbnailUrl,
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
