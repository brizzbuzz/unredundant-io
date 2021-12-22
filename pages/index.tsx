import type { NextPage } from 'next';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="min-h-max mx-32 my-10">
        <p className="text-gray-200">Fill out some personal info</p>
      </div>
    </div>
  );
};

export default Home;
