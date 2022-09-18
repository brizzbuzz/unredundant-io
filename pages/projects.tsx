import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';
import { getProjectData, RepositoryInfo } from './api/github';
import { Button, Card, Col, Grid, Link, Row, Text } from '@nextui-org/react';
import { useMediaQuery } from 'util/useMediaQuery';

type ProjectProperties = {
  data: Array<RepositoryInfo>;
};

const Projects: NextPage<ProjectProperties> = ({ data }) => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Projects');

  const isLg = !useMediaQuery(1400);
  const isSm = useMediaQuery(960);

  const padStyle = isLg ? { paddingLeft: '50px', paddingRight: '50px' } : {};

  return (
    <PageContainer>
      <Grid.Container
        style={{
          ...padStyle,
        }}
        gap={2}
        justify="center"
      >
        {data
          .sort((a, b) => a.stars - b.stars)
          .reverse()
          .map((project, index) => (
            <Grid key={index} xs={12} sm={isSm ? 12 : 6} lg={4} xl={3}>
              <Card css={{ w: '100%', h: '400px' }}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={project.thumbnailUrl}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: 'absolute',
                    bgBlur: '#1a102490',
                    borderTop: '$borderWeights$light solid $gray800',
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <Text
                            size={16}
                            weight="bold"
                            transform="uppercase"
                            css={{
                              textGradient: '45deg, $purple600 -20%, $pink600 50%',
                            }}
                          >
                            {project.repo.name}
                          </Text>
                          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            {project.description}
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end" css={{ paddingTop: '5px' }}>
                        <Link target="_blank" href={`https://github.com/${project.repo.owner}/${project.repo.name}`}>
                          <Button flat auto rounded css={{ color: '#94f9f0', bg: '#94f9f026' }}>
                            <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                              Cop the Sauce
                            </Text>
                          </Button>
                        </Link>
                      </Row>
                    </Col>
                  </Row>
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
