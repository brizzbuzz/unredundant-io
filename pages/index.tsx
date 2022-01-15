import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';

const Home: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Home');

  return (
    <PageContainer>
      <div className="min-h-max mx-32 my-10">
        <p className="text-offset">Fill out some personal info</p>
      </div>
    </PageContainer>
  );
};

export default Home;
