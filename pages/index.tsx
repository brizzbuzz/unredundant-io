import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';
import { Container, Text } from '@nextui-org/react';

const Home: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Home');

  return (
    <PageContainer>
      <Container style={{ textAlign: 'center', paddingTop: '250px' }}>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
          weight="bold"
        >
          (Un)
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $purple500 -20%, $pink500 100%',
          }}
          weight="bold"
        >
          Redundant
        </Text>
        <Text
          h4
          size={14}
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          Yet Another Portfolio Site
        </Text>
      </Container>
    </PageContainer>
  );
};

export default Home;
