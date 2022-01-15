import type { NextPage } from 'next';
import { currentTab, Navbar } from '../components/Navbar';
import { useRecoilState } from 'recoil';

const Projects: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Projects');

  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="min-h-max mx-32 my-10">
        <p className="text-offset">Put project details</p>
      </div>
    </div>
  );
};

export default Projects;
