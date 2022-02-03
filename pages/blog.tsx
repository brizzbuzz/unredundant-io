import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
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
      <div>
        <div>
          {posts.map((post, index) => (
            <Link key={index} href={'/post/' + post.slug} passHref>
              <div>
                <Image src={post.metadata.thumbnailUrl} alt={post.metadata.title} width="300" height="200" />
                <div>{post.metadata.title}</div>
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
