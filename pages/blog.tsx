import type {GetStaticProps, NextPage} from 'next';
import {Navbar} from '../components/Navbar';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

type PostMetadata = {
  title: string;
  date: string; // todo format?
  description: string;
  thumbnailUrl: string;
  tags: string[];
}

type Post = {
  slug: string;
  metadata: PostMetadata
}

type BlogProps = {
  posts: Array<Post>
}


const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <div className="container mx-auto min-h-screen">
      <Navbar />
      <div className="min-h-max mx-32 my-10">
        {/*<p className="text-gray-200">Set up blog posts</p>*/}
        {posts.map((post, index) => (
          <p key={index}>{post.slug} {post.metadata.date}</p>
        ))}
      </div>
    </div>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => getPost(filename));
  return {
    props: {
      posts,
    },
  };
};

function getPost(filename: string): Post {
  const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  const { data: frontMatter } = matter(markdownWithMeta);
  return {
    metadata: frontMatter as PostMetadata,
    slug: filename.split('.')[0],
  };
}

export default Blog;
