import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';
import { getProjectData, RepositoryInfo } from './api/github';
import { Card, Grid, Link, Text } from '@nextui-org/react';

type ProjectProperties = {
  data: Array<RepositoryInfo>;
};

const Projects: NextPage<ProjectProperties> = ({ data }) => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Projects');

  return (
    <PageContainer>
      <Grid.Container style={{ padding: '25px' }} gap={2} justify="center">
        {data
          .sort((a, b) => a.stars - b.stars)
          .reverse()
          .map((project, index) => (
            <Grid key={index} xs={12} sm={2}>
              <Card hoverable color="gradient">
                <Text h4>{project.repo.name}</Text>
                <Text>{project.description}</Text>
                <Card.Footer>
                  <Link target="_blank" href={`https://github.com/${project.repo.owner}/${project.repo.name}`}>
                    <Text h5 css={{ color: '$white' }}>
                      View source code
                    </Text>
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
      </Grid.Container>
    </PageContainer>
  );
};

export async function getServerSideProps() {
  const data = await getProjectData();
  return { props: { data } };
}

export default Projects;
