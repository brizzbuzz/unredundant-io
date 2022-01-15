import type { NextPage } from 'next';
import { currentTab, Navbar } from '../components/Navbar';
import { useRecoilState } from 'recoil';

const Career: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Career');

  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="min-h-max mx-32 my-10">
        <p className="text-gray-200">Add my career info</p>
      </div>
    </div>
  );
};

export default Career;
