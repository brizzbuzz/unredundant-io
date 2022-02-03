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
      <Grid.Container gap={2} style={{ marginLeft: '100px', marginTop: '50px' }}>
        {data.map((project, index) => (
          <Grid key={index}>
            <Card hoverable css={{ w: '330px' }} color="gradient">
              <Text h4>{project.repo}</Text>
              <Text>{project.description}</Text>
              <Card.Footer>
                <Link target="_blank" href={`https://github.com/${project.repo}`}>
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
