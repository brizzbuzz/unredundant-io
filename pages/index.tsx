import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';

const Home: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Home');

  return (
    <PageContainer>
      <div>
        <p>Fill out some personal info</p>
      </div>
    </PageContainer>
  );
};

export default Home;
