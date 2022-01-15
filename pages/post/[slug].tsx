import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import SyntaxHighlighterProps, { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PageContainer } from '../../components/PageContainer';

const syntaxHighlighter = (props: SyntaxHighlighterProps) => {
  return (
    <div className="max-w-screen-lg">
      <SyntaxHighlighter style={dark} {...props} />
    </div>
  );
};

const components = { SyntaxHighlighter: syntaxHighlighter };

const PostPage: NextPage<PostProps> = ({ metadata: { title }, mdxSource }) => {
  return (
    <PageContainer>
      <div className="min-h-max mx-32 my-10">
        <p className="text-amber-500 text-3xl text-center mb-10">{title}</p>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </PageContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface PostContext extends ParsedUrlQuery {
  slug: string;
}

type PostMetadata = {
  title: string;
  date: string; // todo format?
  description: string;
  thumbnailUrl: string;
  tags: string[];
};

type PostProps = {
  slug: string;
  metadata: PostMetadata;
  mdxSource: MDXRemoteSerializeResult;
};

export const getStaticProps: GetStaticProps<PostProps, PostContext> = async (context) => {
  const { slug } = context.params as PostContext;
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      metadata: frontMatter as PostMetadata,
      slug,
      mdxSource,
    },
  };
};

export default PostPage;
