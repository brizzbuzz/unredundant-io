import type { GetStaticProps, NextPage } from 'next';
import { currentTab } from '../components/Navbar';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { PageContainer } from '../components/PageContainer';

type PostMetadata = {
  title: string;
  date: string; // todo format?
  description: string;
  thumbnailUrl: string;
  tags: string[];
};

type Post = {
  slug: string;
  metadata: PostMetadata;
};

type BlogProps = {
  posts: Array<Post>;
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const [, setCurrent] = useRecoilState(currentTab);
  setCurrent('Blog');

  return (
    <PageContainer>
      <div className="min-h-max mx-32 my-10">
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Link key={index} href={'/post/' + post.slug}>
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100">
                <img src={post.metadata.thumbnailUrl} className="rounded-t-lg" />
                <div className="p-1.5">{post.metadata.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => getPost(filename));
  return {
    props: {
      posts,
    },
  };
};

const getPost: (filename: string) => Post = (filename) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  const { data: frontMatter } = matter(markdownWithMeta);
  return {
    metadata: frontMatter as PostMetadata,
    slug: filename.split('.')[0],
  };
};

export default Blog;
