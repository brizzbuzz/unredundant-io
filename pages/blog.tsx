import type { GetStaticProps, NextPage } from 'next';
import { Navbar } from '../components/Navbar';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const Blog: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="min-h-max mx-32 my-10">
        {/*<p className="text-gray-200">Set up blog posts</p>*/}
        {posts.map((post, index) => (
          <p key={index}>{post.slug}</p>
        ))}
      </div>
    </div>
  );
};

type PostMetadata = {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  tags: Array<string>;
};

type StaticProps = {
  slug: string;
  metadata: PostMetadata;
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
