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
      <div>
        <div>
          {data.map((project, index) => (
            <div key={index}>
              <p>{project.repo}</p>
              <p>
                <StarIcon />
                {project.stars}
              </p>
              <p>{project.description}</p>
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
