import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';

const Career: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Career');

  return (
    <PageContainer>
      <div className="min-h-max mx-32 my-10">
        <p className="text-offset">Add my career info</p>
      </div>
    </PageContainer>
  );
};

export default Career;
