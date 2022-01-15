import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';

const Contact: NextPage = () => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Contact');

  return (
    <PageContainer>
      <div className="min-h-max mx-32 my-10">
        <p className="text-gray-200">Add a contact form</p>
      </div>
    </PageContainer>
  );
};

export default Contact;
