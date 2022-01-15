import type { NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';
import { getProjectData, RepositoryInfo } from './api/github';
import { StarIcon } from '@heroicons/react/outline';

type ProjectProperties = {
  data: Array<RepositoryInfo>;
};

const Projects: NextPage<ProjectProperties> = ({ data }) => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Projects');

  return (
    <PageContainer>
      <div className="container mx-auto">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-4">
          {data.map((project, index) => (
            <div key={index} className="bg-rich rounded-lg shadow-2xl p-4">
              <p className="text-lg text-accent-dark text-center">{project.repo}</p>
              <p className="text-pop text-center">
                <StarIcon className="mr-1 inline align-middle h-4" />
                {project.stars}
              </p>
              <p className="m-4 text-sm text-offset text-center">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export async function getServerSideProps() {
  const data = await getProjectData();
  return { props: { data } };
}

export default Projects;
