import type { NextPage } from 'next';
import { currentTab, Navbar } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';

const Projects: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Projects');

  return (
    <PageContainer>
      <div className="min-h-max mx-32 my-10">
        <p className="text-offset">Put project details</p>
      </div>
    </PageContainer>
  );
};

export default Projects;
